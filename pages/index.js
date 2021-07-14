import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../componen/layout/footer'
import TimelineView from '../componen/TimelineView'
import axios from 'axios'
import { getJadwal } from '../data/getJadwal'

const LandingPage = ({data, tanggal}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Info Vaksin Sleman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Info Vaksin Sleman</h1>
      </main>
      <TimelineView data={data} tanggal={tanggal}/>

      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const returnJadwal = await getJadwal()
  let jadwal = []
  let tanggal = []
  returnJadwal.map((faskes, k)=>{
    if (faskes.result.length > 0) {
      jadwal.push(faskes)
      faskes.result.map((jadwal,key) => {
        if (tanggal.indexOf(jadwal.tanggal_vaksin)==-1) tanggal.push(jadwal.tanggal_vaksin)
      })
    }
  })
  tanggal.sort(function(a,b){ return new Date(a) - new Date(b) });
  return {
    props: {
      data: jadwal,
      tanggal : tanggal
    }
  }
}

export default LandingPage