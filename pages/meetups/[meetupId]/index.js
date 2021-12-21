import {useRouter} from 'next/router'
import clientPromise from '../../../lib/mongodb'
import MeetupDetail from '../../../components/meetups/MeetupDetail'
import { ObjectId } from 'mongodb'

const meetupDUMMY={
  image:'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZhzDQLMyYlYAAAAAAAAAAABkARQnAQ',
  title:'meetup.title',
  address:'meetup.address',
  description:'meetup.description'
}

function DetailPage(props){
  const {meetupData:meetup} = props
  
  return <MeetupDetail meetup={meetup}></MeetupDetail>
   
}

export default DetailPage

export async function getStaticPaths(){
  const client = await clientPromise
  const db = client.db()
  const collection = db.collection("meetups");
  // perform actions on the collection object
  const result = await collection.find({},{'_id':1}).toArray()
  const paths=result.map(m=>({
    params:{
      meetupId:m._id.toString()
    }
  }))
  return {
    fallback: true, //'blocking',
    paths
  }
}
export async function getStaticProps(context){
  // fetch data for a single meetup
  const meetupId=context.params.meetupId
  // may fetch data from an API
  const client = await clientPromise
  const db = client.db()
  const collection = db.collection("meetups");
  // perform actions on the collection object
  const result = await collection.findOne({'_id':ObjectId(meetupId)})
  delete result._id
  const meetup = result
 
  return {
    props:{
      meetupData:{
        ...meetup,
        id:meetupId
      }
    }
  }
}