function destroyer(arr) {
  let remove = [];
  for (let i = 1; i < arguments.length; i++) {
   remove.push(arguments[i]);
  }
  return arr.filter(item => !remove.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);