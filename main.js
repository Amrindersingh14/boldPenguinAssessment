const { generatePrimesInRange } = require('./primeNumberGenerator');

const lowerBound = parseInt(process.argv[2]);
const upperBound = parseInt(process.argv[3]);

if (isNaN(lowerBound) || isNaN(upperBound)) {
  console.log('Please provide valid numeric range.');
} else {
  const primes = generatePrimesInRange(lowerBound, upperBound);
  console.log('Prime numbers:', primes.join(', '));
}
