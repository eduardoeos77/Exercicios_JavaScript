/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

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