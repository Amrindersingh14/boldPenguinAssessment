const { generatePrimesInRange } = require('./primeNumberGenerator');
const assert = require('chai').assert;

describe('Prime Number Generator', function() {
  it('should generate prime numbers in a given range', function() {
    const primes = generatePrimesInRange(1, 10);
    assert.deepEqual(primes, [2, 3, 5, 7]);
  });

  it('should handle inverse ranges', function() {
    const primes = generatePrimesInRange(10, 1);
    assert.deepEqual(primes, [2, 3, 5, 7]);
  });

  it('should generate valid prime numbers in specific range', function() {
    const primes = generatePrimesInRange(7900, 7920);
    assert.deepEqual(primes, [7901, 7907, 7919]);
  });
});
