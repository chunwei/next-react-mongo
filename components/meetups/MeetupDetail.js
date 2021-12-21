import Image from 'next/image'
import { useRouter } from 'next/router'
import classes from './Meetup.module.css'
export default function MeetupDetail(props){
  const {isFallback,query} = useRouter()
  const {meetup}=props
  return (isFallback?<div>
    This is a fallback page, fullpage is statically generating. 
    query= {JSON.stringify(query)}
  </div>:
  <section className={classes.detail}>
    <Image src={meetup.image} alt={meetup.title}  width={752} height={368}  layout='responsive'/>
    <h1>{meetup.id}: {meetup.title}</h1>
    <address>{meetup.address}</address>
    <p>{meetup.description}</p>
  </section>)
}
