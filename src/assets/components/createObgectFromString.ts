function createObgectFromString(params:string) {
  const obj = JSON.parse(`{"${params.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
    (key, value) => (key === '' ? value : decodeURIComponent(value)));

  return obj;
}

export default createObgectFromString;
