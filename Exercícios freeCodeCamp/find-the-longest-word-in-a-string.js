function findLongestWordLength(str) {
  let arr = [];
  let n = 0;
  arr = str.split(" ");
  
  for (let i = 0; i < arr.length-1; i++) {

    if (arr[i].length > arr[i+1].length && arr[i].length > n) {
      n = arr[i].length;
    }
    else if (arr[i+1].length > arr[i].length && arr[i+1].length > n) {
      n = arr[i+1].length;
     }
  }

  return n;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");