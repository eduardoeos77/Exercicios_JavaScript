function chunkArrayInGroups(arr, size) {
   let temp = [];
  const iteracao = Math.ceil(arr.length/size);

  for (let i = 0; i < iteracao; i++) {
    if (size <= arr.length && arr !== [])
      temp.push(arr.splice(0, size));
    else if (size > arr.length && arr !== [])
      temp.push(arr); 
  }
  return temp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);