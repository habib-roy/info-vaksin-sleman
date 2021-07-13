import axios from 'axios'
import { getLokasi } from './getLokasi';
import { redisClientGet, redisClientSetex } from './redisClient';

const LIST_FASKES = `https://daftarvaksin.slemankab.go.id/_adm/api/list-faskes`;

const getFaskes = async () => {
  const dataFaskes = await redisClientGet('faskes')
  if (dataFaskes) {
    console.log("Data Faskes successfully retrieved from Redis");

    return JSON.parse(dataFaskes)
  } else {
    const result = await axios.get(LIST_FASKES);
    const lokasi = getLokasi()
    var resultData = result.data.result

    resultData.forEach((v, k) => {
      const dataLokasi = lokasi.find(x => x.id == v.id)
      if (dataLokasi) {
        resultData[k]['lat'] = dataLokasi.lat
        resultData[k]['lon'] = dataLokasi.lon
      }
    });
    
    redisClientSetex('faskes', process.env.REDIS_EXPIRE, JSON.stringify(resultData));

    console.log("Data Faskes successfully retrieved from the API");

    return resultData
  }
};

export { getFaskes };