function rot13(str) {

  return str
  .split('')
  .map(item => item.charCodeAt())
  .map(item => item >= 65 && item <= 77 ? item + 13 
  : item > 77 && item <= 90 ? item - 13
  : item = item)
  .map(item => String.fromCharCode(item))
  .join('');

}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");