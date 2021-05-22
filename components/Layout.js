import Head from "next/head";
import styles from "../styles/Layout.module.css"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      
      <div class={styles.container}>
      {children}
      </div>


    </div>
  );
}

Layout.defaultProps = {
  title: 'Dj Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  kaywords: 'music, dj, edm, events'
}