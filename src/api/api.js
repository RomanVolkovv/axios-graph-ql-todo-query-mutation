import * as axios from 'axios';

const url = 'https://graphqlzero.almansi.me/api';

async function makeRequest(query) {
  const res = await axios.post(url, { query });
  return res;
}

export { makeRequest };
