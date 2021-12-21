import clientPromise from '../../lib/mongodb'
import MeetupList from '../../components/meetups/MeetupList'
import Head from 'next/head'

const DUMMY_MEETUPS=[
  {id:'meetup.id-1',
  image:'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZhzDQLMyYlYAAAAAAAAAAABkARQnAQ',
  title:'meetup.title',
  address:'meetup.address',
  description:'meetup.description'},
  {id:'meetup.id-2',
  image:'https://gw.alipayobjects.com/zos/antfincdn/888xda6kBc/Ant%252520Design%252520shouyepeitu.svg',
  title:'meetup.title',
  address:'meetup.address',
  description:'meetup.description'},
]

function MeetupHomePage(props){
  return <>
    <Head><title>Meetup HomePage</title></Head> 
    <MeetupList meetups={props.meetups}></MeetupList>
    </>
}

// // this func will only runs on the server, never on client
// // run every request
// export async function getServerSideProps(context){
//   const req =  context.req;
//   const res =  context.res;
//   // may fetch data from an API
//   return {
//     props:{
//       meetups:DUMMY_MEETUPS
//     }
//   }
// }

// this func will only exec in build process
// can be cached and reused in CDN
export async function getStaticProps(){
  // may fetch data from an API
  const client = await clientPromise
  const db = client.db()
  const collection = db.collection("meetups");
  // perform actions on the collection object
  const result = await collection.find().toArray()
  //console.log(result)
  const meetups = result.map(m=>{let a={...m,id:m._id.toString()};delete a._id;return a;})
  //console.log(meetups)
  //client.close();

  return {
    props:{
      //meetups:DUMMY_MEETUPS
      meetups
    },
    revalidate:1    // re-generate page data every 1 s on server side. (updated regularly after deployment)
  }
}
export default MeetupHomePage