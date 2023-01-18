/* Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  
    let numeros = Array.from(String(num), Number).reverse();
    let unidade = [], dezena = [], centena = [], milhar = [];
    let simbU = ['I', 'IV', 'V', 'IX'];
    let simbD = ['X', 'XL', 'L', 'XC'];
    let simbC = ['C', 'CD', 'D', 'CM'];
    let simbM = ['M'];
  
    let roman = (n, simb) => {
      let arr = [];
      if (n > 0 && n <= 3)
        arr = Array(n).fill(simb[0]);
      if (n === 4)
        arr.push(simb[1]);
      if (n === 5)
        arr.push(simb[2]);
      if (n > 5 && n <= 8) {
        arr = Array(n - 5);
        arr.unshift(simb[2]);
        arr.fill(simb[0], 1); }
      if (n === 9)
        arr.push(simb[3]);
        
        return arr;
      };
  
      unidade = roman(numeros[0], simbU);
      dezena = roman(numeros[1], simbD);
      centena = roman(numeros[2], simbC);
      milhar = roman(numeros[3], simbM);
  
    return milhar
            .concat(centena, dezena, unidade)
            .join('');
  }
  
  convertToRoman(891);