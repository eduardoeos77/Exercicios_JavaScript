function sumAll(arr) {

  let newArr = [...arr];
  let soma = 0;
  newArr.sort((a, b) => a - b);
  
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    soma += i;
  }

  return soma;
}

sumAll([1, 4]);