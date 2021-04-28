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
        <h1>Sources</h1>
        <ul>
            <li><a href="https://www.thecanadianencyclopedia.ca/en/article/war-of-1812">https://www.thecanadianencyclopedia.ca/en/article/war-of-1812</a></li>
            <li><a href="https://www.warmuseum.ca/war-of-1812">https://www.warmuseum.ca/war-of-1812 </a></li>
        </ul>
      </main>
    </div>
  )
}
