import { getFaskes } from '../../../data/getFaskes';

export default async (req, res) => {
  const data = await getFaskes()

  res
    .status(200)
    .json({
      status: 200,
      data: data,
      error: null
    })
}
