import Link from 'next/Link'
import Layout from '../components/Layout'


export default function HomePage() {
  return (
    <Layout>


      <h1>Home</h1>
      <Link href='/about'>About</Link>


    </Layout>
  )
}
