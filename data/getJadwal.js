import axios from 'axios'
import { getFaskes } from './getFaskes';
import { getJadwalFaskes } from './getJadwalFaskes';

const getJadwal = async () => {
  const faskes = await getFaskes();
  var jadwalSemuaFaskes = []
  for (const f of faskes) {
    jadwalSemuaFaskes.push(getJadwalFaskes(f.id))
  }

  return Promise.all(jadwalSemuaFaskes)
};

export { getJadwal };