function palindrome(str) {
  
  let regex = /[A-Z0-9]/;
  let newArr = [];

  let arr = str
  .toUpperCase()
  .split('')
  .filter(item => regex.test(item));

  arr.forEach(item => newArr.unshift(item));

  return arr.join('') === newArr.join('');
}

palindrome("eye");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("not a palindrome")
palindrome("My age is 0, 0 si ega ym.")