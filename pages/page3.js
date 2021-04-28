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
        <h1>Participants</h1>
        <p>The United Kingdom and the United States.</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" height="20%" width="20%"/>
        <br />
        <img src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" height="20%" width="20%" />
        <br />
        <Button variant="contained" color="primary" href="page4">Next Page</Button>
      </main>
    </div>
  )
}
