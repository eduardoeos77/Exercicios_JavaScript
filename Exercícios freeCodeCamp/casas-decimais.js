let arr = Array.from(String(num), Number).reverse();

let decimal = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 10**i);
  }
  return newArr
};

 console.log(decimal(arr))