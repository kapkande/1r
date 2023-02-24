function createUrlSticks(arr: string[][], title: string) {
  const array: string[] = [];
  arr.forEach((element) => {
    const elem = element.join('|');
    array.push(elem);
  });
  const finalArray = array.join('@');
  const path = `nameGame=sticks&title=${encodeURI(title)}&arr=${finalArray}`;
  window.history.pushState({}, '', `/#/${path}`);
}
export default createUrlSticks;
