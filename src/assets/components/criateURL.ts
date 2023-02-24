import dataGame from './data/dataGame';

function criateURL(date:dataGame) {
  const params = new URLSearchParams();
  const a = Object.entries(date);
  for (const [key, val] of a) {
    params.append(key, `${val}`.replace(/\s/g, '%20'));
  }
  const query = String(params);
  return query;
}
export default criateURL;
