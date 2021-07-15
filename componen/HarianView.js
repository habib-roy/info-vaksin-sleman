import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import TodayIcon from '@material-ui/icons/Today';
import FaskesView from './FaskesView';
import Grid from '@material-ui/core/Grid';

export default function HarianView({data, tanggal}) {
  const jadwal = data ?? []
  let faskesHariIni = []
  if(jadwal.length > 0){
    jadwal.forEach((faskes,k) => {
      if(faskes.result.find(x => x.tanggal_vaksin == tanggal)) faskesHariIni.push(faskes)
    });
  }
  const clientTimeOffset = new Date().getTimezoneOffset()/60

  const diff =  Math.floor(( Date.parse(tanggal) - Date.now() + clientTimeOffset) / 86400000);
  const kurangHari = (diff == 0) ? 'Hari ini' : diff + ' hari lagi'
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