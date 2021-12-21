import Image from "next/image"
import Link from "next/link"
import Card from '../ui/Card'
import classes from './Meetup.module.css'

function DetailLink(props){
  const {id}=props
  const url=`/meetups/${id}`
  return <div className={classes.detaillink} >
    <Link href={url}>View Detail</Link> 
    </div>
}
function MeetupItem(props){
  const meetup=props
  return (
  <Card>
    <Image src={meetup.image} alt={meetup.title} width={752} height={368} layout='responsive'  className={classes.cardCover}/>
    <h1>{meetup.title}</h1>
    <p>{meetup.id}</p>
    <address>{meetup.address}</address>
    <p>{meetup.description}</p>
    <DetailLink id={meetup.id} />
  </Card>
  )
}
export default MeetupItem 