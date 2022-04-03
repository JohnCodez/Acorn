import Head from 'next/head'

import BackgroundStyles from 'designs/HomeBackground/HomeBackground.module.css'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Acorn</title>
        <meta name="description" content="Acorn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main} style={{'--textTheme': 'white'}}>
        <div className={BackgroundStyles.homeBackground}>
          <div className={styles.container}>
            <h1 className={styles.title}>Welcome to Acorn</h1>
            <div className={styles.buttons}>
              <div className={styles.buttonExplore}>EXPLORE</div>
              <div className={styles.buttonLogin}>JOIN US</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
