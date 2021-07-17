import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import TodayIcon from '@material-ui/icons/Today';
import FaskesView from './FaskesView';
import Grid from '@material-ui/core/Grid';

function hitungHari(tgl){
  const sekarang = new Date()
  const jam = sekarang.getHours() + ':' + sekarang.getMinutes() + ':' + sekarang.getSeconds() + '.' + sekarang.getMilliseconds()
  const kapan = new Date(`${tgl} ${jam}`)
  const selisihMiliSecond = kapan.getTime() - sekarang.getTime()

  let teksHari = ''
  if(selisihMiliSecond < 0){
      teksHari = `${Math.floor(Math.abs(selisihMiliSecond) / 86400000)} hari yang lalu`
  }else{
      const selisihHari = Math.floor(selisihMiliSecond / 86400000)
      teksHari = selisihHari == 0 ? 'Hari ini' : `${selisihHari} hari lagi`
  }
  return teksHari
}

export default function HarianView({data, tanggal}) {
  const jadwal = data ?? []
  let faskesHariIni = []
  if(jadwal.length > 0){
    jadwal.forEach((faskes,k) => {
      if(faskes.result.find(x => x.tanggal_vaksin == tanggal)) faskesHariIni.push(faskes)
    });
  }
  
  const kurangHari = hitungHari(tanggal)

  return (
    <Card style={{backgroundColor: "#f5f5f5"}}>
      <CardHeader
        avatar={
          <TodayIcon />
        }
        title={new Intl.DateTimeFormat('id', { weekday: 'long', day: '2-digit', month: 'long' , year: 'numeric' }).format(new Date(tanggal))}
        subheader={kurangHari}
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          {faskesHariIni.length > 0 ? (
            faskesHariIni.map((f,key) =>(
              <Grid key={key} container item xs={12} sm={3}>
                <FaskesView data={f} tanggal={tanggal} />
              </Grid>
            ))
          ):('')}
        </Grid>
      </CardContent>
    </Card>
  );
}