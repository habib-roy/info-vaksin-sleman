import axios from 'axios'
import { redisClientGet, redisClientSetex } from './redisClient';
import { getLokasi } from './getLokasi';

const JADWAL_FASKES = `https://daftarvaksin.slemankab.go.id/_adm/api/data_jadwal?nik=&umur=&id_faskes=`;

const getJadwalFaskes = async (id) => {
  if (id) {
    const dataJadwalFaskes = await redisClientGet('faskes-id-'+id)
    if (dataJadwalFaskes) {
      console.log("Jadwal Tiap Faskes successfully retrieved from Redis");
  
      return JSON.parse(dataJadwalFaskes)
    }else{
      var result = await axios.get(JADWAL_FASKES+id);
      const lokasi = getLokasi()
      const dataLokasi = lokasi.find(x => x.id == id)
      if (dataLokasi) {
        result.data.datafaskes[0].lat = dataLokasi.lat
        result.data.datafaskes[0].lon = dataLokasi.lon
      }
      result.data.result.map((jadwal,key) => {
        delete jadwal.id_jadwal_faskes
        delete jadwal.id_data_faskes
        delete jadwal.faskes
      })
      
      redisClientSetex('faskes-id-'+id, process.env.REDIS_EXPIRE, JSON.stringify(result.data));

      console.log("Jadwal Tiap Faskes successfully retrieved from the API");
      return result.data
    }
  }
};

export { getJadwalFaskes };