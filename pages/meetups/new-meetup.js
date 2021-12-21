import { useRouter } from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage(){
  const router = useRouter()
  async function onAddMeetup(meetup){
    //console.log(meetup)
    const res=await fetch('/api/new-meetup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(meetup)
    })
    const data = await res.json()
    //console.log(data)
    router.push('/meetups')
  }
  return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
}
