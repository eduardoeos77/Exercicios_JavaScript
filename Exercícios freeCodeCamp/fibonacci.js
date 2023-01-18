let arr = [];

  let fib = n => {
    for (let i = 0; i < n; i++) {
      if (i === 0)
        arr.push(1);
      else if (i === 1)
        arr.push(1);
      else
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
  };

  console.log(fib(10));