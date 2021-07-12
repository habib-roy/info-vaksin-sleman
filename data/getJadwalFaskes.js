import axios from 'axios'
import { redisClientGet, redisClientSetex } from './redisClient';

const JADWAL_FASKES = `https://daftarvaksin.slemankab.go.id/_adm/api/data_jadwal?nik=&umur=&id_faskes=`;

const getJadwalFaskes = async (id) => {
  if (id) {
    const dataJadwalFaskes = await redisClientGet('faskes-id-'+id)
    if (dataJadwalFaskes) {
      console.log("Jadwal Tiap Faskes successfully retrieved from Redis");
  
      return JSON.parse(dataJadwalFaskes)
    }else{
      const result = await axios.get(JADWAL_FASKES+id);

      redisClientSetex('faskes-id-'+id, process.env.REDIS_EXPIRE, JSON.stringify(result.data));

      console.log("Jadwal Tiap Faskes successfully retrieved from the API");
      return result.data
    }
  }
};

export { getJadwalFaskes };