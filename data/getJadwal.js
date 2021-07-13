import axios from 'axios'
import { getFaskes } from './getFaskes';
import { getJadwalFaskes } from './getJadwalFaskes';

const JADWAL_FASKES = `https://daftarvaksin.slemankab.go.id/_adm/api/data_jadwal?nik=&umur=&id_faskes=`;

const getJadwal = async () => {
  const faskes = await getFaskes();
  var jadwalSemuaFaskes = []
  for (const f of faskes) {
    jadwalSemuaFaskes.push(getJadwalFaskes(f.id))
  }

  return Promise.all(jadwalSemuaFaskes)
};

export { getJadwal };