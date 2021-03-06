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
        <h1>The War of 1812</h1>
        <h3>By: Andrew Lee</h3>
        <img src="https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTU3ODc3NjU2MjE2MzQ4Mzgz/battle-of-new-orleans.jpg" width="80%" height="80%" />
        <br/>
        <Button variant="contained" color="primary" href="/page2">Next Page</Button>
      </main>
    </div>
  )
}
