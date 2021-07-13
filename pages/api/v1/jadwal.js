import { getJadwal } from '../../../data/getJadwal';

export default async (req, res) => {
  const data = await getJadwal()
  var jadwalSemuaFaskes = []
  data.map((jadwal, key) => {
    jadwalSemuaFaskes.push({
      nama : jadwal.datafaskes[0].faskes,
      wilayah : jadwal.datafaskes[0].wilayah,
      jadwal : jadwal.result
    })
  })
  
  res
    .status(200)
    .json({
      status: 200,
      data: jadwalSemuaFaskes,
      error: null
    })
}
