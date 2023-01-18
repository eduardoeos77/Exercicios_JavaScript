function sumPrimes(num) {
  
  let sumPrime = 0;

  let isPrime = n => {
    if (n < 2)
      return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0)
        return false;
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sumPrime += i;
  }

  return sumPrime;
}

sumPrimes(10);
sumPrimes(977);