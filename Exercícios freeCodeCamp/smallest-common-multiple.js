function smallestCommons(arr) {
  
 let range = [];
 
 arr.sort((a, b) => a - b);
  
  for (let i = arr[0]; i <= arr[1]; i++) {
    range.push(i);
  }

  let maiorMultiplo = range.reduce((a, b) => a * b);

  for (let multiple = arr[1]; multiple <= maiorMultiplo; multiple += arr[1]) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }

  console.log(maiorMultiplo)


  

}

smallestCommons([1,5]);
smallestCommons([5, 1]);
smallestCommons([23, 18]);