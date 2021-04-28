import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The War of 1812</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Aftermath</h1>
        <ul>
            <li>Neither Britain nor the United States could defeat the other.</li>
            <li>The two governments decided to negotiate peace.</li>
            <li>The Treaty of Ghent ended the war in February 1815 but left Native American territory exposed to further American expansion.</li>
        </ul>
        <br />
        <Button variant="contained" color="primary" href="page8">Next Page</Button>
      </main>
    </div>
  )
}
