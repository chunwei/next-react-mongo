import {useRef} from 'react'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props){
  const titleRef = useRef()
  const imageRef = useRef()
  const addressRef = useRef()
  const descriptionRef = useRef()

  function handleSubmit(event){
    event.preventDefault();
    const meetup={
      title:titleRef.current.value,
      image:imageRef.current.value,
      address:addressRef.current.value,
      description:descriptionRef.current.value,
    }
    props.onAddMeetup(meetup)
  }

  return (<Card>
    <form onSubmit={handleSubmit}>
      <div className={classes.formItem}>
        <label htmlFor='title'>title</label>
        <input id='title' type='text' ref={titleRef} required></input>
      </div>
      <div className={classes.formItem}>
        <label htmlFor='image'>image</label>
        <input id='image' type='text' ref={imageRef} required></input>
      </div>
      <div className={classes.formItem}>
        <label htmlFor='address'>address</label>
        <input id='address' type='text' ref={addressRef} required></input>
      </div>
      <div className={classes.formItem}>
        <label htmlFor='description'>description</label>
        <textarea rows={5} id='description' type='text' ref={descriptionRef} required/>
      </div>
      <div className={classes.formItem}>
        <button >Add Meetup</button>
      </div>
    </form>
  </Card>)
}

export default NewMeetupForm