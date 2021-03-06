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
        <h1>The Cause Of This War</h1>
        <p>The British blocked American ships to enter Europe and American ships were forced to join the Royal Navy.</p>
        <img src="https://www.maritime-executive.com/media/images/article/Photos/Navy_Govt_CoastGuard/warships-war-of-1812.351492.jpg"/>
        <br />
        <Button variant="contained" color="primary" href="page3">Next Page</Button>
      </main>
    </div>
  )
}
