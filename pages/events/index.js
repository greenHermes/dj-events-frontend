import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'

export default function EventsPage({ events }) {
  // console.log(events.length)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  console.log(res.json)
  // const events = await res.json()

  const events = [{id: 1, name: "Hardcoded Name of Event", time: "3:00", date: "April 20th, 2020", data: "data"}]
  return {
    props: {events},
    revalidate: 1
  }
}