function bouncer(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) 
      temp.push(arr[i]);

  }
  return temp;
}

bouncer([7, "ate", "", false, 9]);