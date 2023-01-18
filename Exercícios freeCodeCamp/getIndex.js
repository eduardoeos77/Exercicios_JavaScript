function getIndexToIns(arr, num) {

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      
      return i;
    }
    
console.log(i);


  }



  console.log(sorted);
  console.log(arr);

}

getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([10, 20, 30, 40, 50], 35);