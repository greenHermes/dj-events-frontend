import Layout from "@/components/Layout"
import Link from 'next/link'
import Image from 'next/image'
import {FaPencilAlt, FaTimes} from 'react-icons/fa'
import styles from "@/styles/Event.module.css"
import eventData from 'public/data.json'
import { API_URL } from '@/config/index'


export default function EventPage({evt}) {
  const deleteEvent = (e) =>{
    console.log('delete')
  }

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events.edit.${evt.is}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
      </div>

      <span>
        {evt.date} at {evt.time}
      </span>
      <h1>{evt.name}</h1>
      {evt.image && (
        <div className={styles.image}>
        <Image src={evt.image} width={960} height={600}/>
        </div>
      )}

      <h3>Performers:</h3>
      <p>{evt.performers}</p>

      <h3>Description:</h3>
      <p>{evt.description}</p>

      <h3>Venue: {evt.venue}</h3>
      <p>{evt.address}</p>

        <Link href='/events'>
          <a className={styles.back}>Go Back</a>
        </Link>

    </Layout>
  )
}

function filterData(arr, query){
  var singleEvent;
  for (var i=0; i < arr.length; i++){
    var eventName = arr[i].name.toLowerCase()
    var query = query.toLowerCase().split('-').join(' ')
    if (eventName === query){
      singleEvent = arr[i]
    }

  }
  return singleEvent;

}

export async function getServerSideProps({query: {slug} }) {
  // const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = eventData.events;
  
  // console.log(events)
  // console.log(slug)
  
  var event = filterData(events, slug)

  return {
    props: {evt: event}
  }
}
