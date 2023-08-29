function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function generatePrimesInRange(lowerBound, upperBound) {
    if (lowerBound > upperBound) {
      [lowerBound, upperBound] = [upperBound, lowerBound]; // Swap bounds if needed
    }
  
    const primes = [];
    for (let num = lowerBound; num <= upperBound; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }
  
  module.exports = { generatePrimesInRange };
  