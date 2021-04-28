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
        <h1>When did it happen?</h1>
        <p>June 1812 to February 1815</p>
        <img src="https://i2.wp.com/niagarapoetry.ca/wp-content/uploads/2018/01/war-1812.png?fit=1149%2C760" width="50%" height="50%"/>
        <br />
        <Button variant="contained" color="primary" href="page6">Next Page</Button>
      </main>
    </div>
  )
}
