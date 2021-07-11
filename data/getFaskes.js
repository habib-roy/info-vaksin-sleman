import axios from 'axios'

const LIST_FASKES = `https://daftarvaksin.slemankab.go.id/_adm/api/list-faskes`;

const getFaskes = async () => {
  const result = await axios.get(LIST_FASKES);
  return result.data.result
};

export { getFaskes };