function fearNotLetter(str) {
  let curr = str.charCodeAt(0);
  let missing = undefined;

  str
  .split('')
  .forEach(char => {
    if (char.charCodeAt(0) === curr)
      curr++;
    else
      missing = String.fromCharCode(curr); 
  });
  return missing;
}

fearNotLetter("abce");