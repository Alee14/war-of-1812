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
        <h1>Events</h1>
        <ul>
            <li>American armies invaded Canada.</li>
            <li>British armies invaded the United States.</li>
            <li>United States Navy ships defeated British ships.</li>
            <li>The Royal Navy blocked the United States, which damaged the American economy, and launched raids from the sea that included attacks on Washington, Baltimore, and New Orleans.</li>
            <li>Native Americans contributed to the defence of Upper Canada but could not win their own war against the United States.</li>
            <li>First Peoples warriors, French and English speaking militia and colonial regulars supported British regulars in the defence of Canada.</li>
        </ul>
        <br />
        <Button variant="contained" color="primary" href="page7">Next Page</Button>
      </main>
    </div>
  )
}
