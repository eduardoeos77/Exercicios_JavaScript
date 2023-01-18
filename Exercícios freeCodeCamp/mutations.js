function mutation(arr) {

 let temp1 = arr[0]
    .toLowerCase();
  let temp2 = arr[1]
    .toLowerCase();
  
    for (let i = 0; i < temp2.length; i++) {
      if (temp1.indexOf(temp2[i]) < 0)
        return false;
    }

    return true;
}

mutation(["hello", "hey"]);