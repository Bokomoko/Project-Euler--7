function isPrime(n) {
  if (n==2) return true
  if (n %2 == 0 ) return false
  const top = Math.sqrt(n).toFixed(0)
  for (let i=3; i<= top;i+=2) {
    if ( (n % i) == 0 ) return false
  }
  return true
}

function nthPrime(wn) {
  let i=2
  let nPrimes = 0 
  let last = 0
  while (nPrimes < wn) {
    if (isPrime(i)) {
      last = i
      nPrimes++
    } 
    i++
  }
  // Good luck!
  return last;
}

nthPrime(6);
