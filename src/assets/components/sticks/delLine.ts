function delLine(e:Event) {
  const targ = e.target as HTMLButtonElement;
  targ.removeEventListener('click', delLine);
  targ.parentElement?.remove();
}

export default delLine;
