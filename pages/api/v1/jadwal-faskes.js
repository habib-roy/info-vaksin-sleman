import { getJadwalFaskes } from '../../../data/getJadwalFaskes';

export default async (req, res) => {
  if(req.query.id_faskes){
    const { result, datafaskes } = await getJadwalFaskes(req.query.id_faskes)
    if (datafaskes[0]) {
      res
        .status(200)
        .json({
          status: 200,
          data: {
            jadwal : result,
            faskes: {
              nama : datafaskes[0].faskes,
              wilayah : datafaskes[0].wilayah,
              lat: datafaskes[0].lat,
              lon: datafaskes[0].lon,
            }
          },
          error: null
        })
    }else{
      res
      .status(400)
      .json({
        status: 400,
        data: {
          jadwal : [],
          faskes: {
            nama : null,
            wilayah : null
          }
        },
        error: 'id_faskes salah'
      })
    }
  }else{
    res
    .status(400)
    .json({
      status: 400,
      data: {
        jadwal : [],
        faskes: {
          nama : null,
          wilayah : null
        }
      },
      error: 'kurang id_faskes'
    })
  }
}
