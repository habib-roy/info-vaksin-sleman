import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../componen/layout/footer'
import TimelineView from '../componen/TimelineView'
import axios from 'axios'
import { getJadwal } from '../data/getJadwal'
import { Link, Box, Heading, Container, Text} from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

const LandingPage = ({data, tanggal}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Info Vaksin Sleman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    
      
      <Container maxW="container.xl">
        <Box maxW="container.xl" overflow="hidden" marginBottom="10px" marginTop="10px">
          <Heading align="center">Info Vaksin Sleman</Heading>
        </Box>
        <Box marginBottom="20px">
          <p>        
            <span>Laman ini menyajikan informasi jadwal dan quota harian pelaksanaan vaksinasi COVID-19 di fasilitas kesehatan (Faskes) Kabupaten Sleman, DIY.
            Anda dapat memeriksa ketersediaan dosis vaksin pada setiap Faskes. Pastikan masih terdapat sisa dosis vaksin sebelum anda mengambil keputusan mendaftarkan diri pada layanan vaksinasi.
            Rencanakan waktu dan lokasi vaksin terbaik Anda di Sleman. Daftarkan diri melalui laman resmi</span>
            <Link href="https://daftarvaksin.slemankab.go.id/" isExternal ml="4px" color="teal.500">
             https://daftarvaksin.slemankab.go.id/ <ExternalLinkIcon mx="2px" />
            </Link>
            </p>
            <br/>
            <Text fontSize="xs"><p><strong>Disclaimer:</strong><br/>
            <i>Kami mencoba membantu menyajikan data info vaksinasi di Kabupaten Sleman. Info yang tersaji kami kurasi dari dari beberapa sumber resmi, terutama dari laman https://daftarvaksin.slemankab.go.id/</i></p></Text>
            
          
        </Box>
      </Container>
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