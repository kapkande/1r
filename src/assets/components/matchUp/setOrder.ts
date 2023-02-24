function setOrder(element:string) {
  const arrayNumbers: NodeListOf<Element> = document.querySelectorAll(element);
  arrayNumbers.forEach((element, index) => {
    element.textContent = `${index + 1}`;
  });
}
export default setOrder;
