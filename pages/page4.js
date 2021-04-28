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
        <h1>Where did this happen?</h1>
        <p>The Canadian–American frontier and the Great Lakes region<br/>The Atlantic and Gulf of Mexico coasts of North America<br/>The Atlantic Ocean</p>
        <img src="https://lh3.googleusercontent.com/proxy/jokzi7NoVX1Pi0aDmLOichq03Oy0exLjwPQkzmrtK_RAaSCtT3adqkWJOexRIAb65r3NC-E2fM3aPMsF8oTMB3BCwTUbn1yb6we9rksM2S0KDFjg_018s4GBHwQ7EkWMuNtwy8KQ0g" />
        <Button variant="contained" color="primary" href="page5">Next Page</Button>
      </main>
    </div>
  )
}
