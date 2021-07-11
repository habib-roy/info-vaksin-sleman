import axios from 'axios'

const JADWAL_FASKES = `https://daftarvaksin.slemankab.go.id/_adm/api/data_jadwal?nik=&umur=&id_faskes=`;

const getJadwalFaskes = async (id) => {
  if (id) {
    const result = await axios.get(JADWAL_FASKES+id);
    return result.data
  }
};

export { getJadwalFaskes };