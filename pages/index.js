import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import eventData from 'public/data.json'
import { API_URL } from '@/config/index'


export default function HomePage({events}) {
  console.log(events.length)
  return (
    <Layout>


      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3> No events to show</h3>}


      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'>View All Events</a>
        </Link>
      )}

    </Layout> 
  )
}

export async function getStaticProps(){
  // const res = await fetch(`${API_URL}/api/events`)
  const events = eventData.events;

  return {
    props: {events: events.splice(0, 4)},
    revalidate: 1
  }

}
