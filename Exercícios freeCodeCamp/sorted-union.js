function uniteUnique(arr) {

  let newArr = [];
  let result = [];
  
  for (let i = 0; i < arguments.length; i++) {
    newArr = newArr.concat(arguments[i]);
  }

  newArr.forEach(element => {
    if (!result.includes(element))
      result.push(element);
  });

  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);