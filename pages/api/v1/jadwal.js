import { getJadwal } from '../../../data/getJadwal';

export default async (req, res) => {
  const data = await getJadwal()

  res
    .status(200)
    .json({
      status: 200,
      data: data,
      error: null
    })
}
