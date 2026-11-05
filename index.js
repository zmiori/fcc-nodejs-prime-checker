function isPrime(num) {
  if (num <= 1) return false; // not prime numbers
  if (num <= 3) return true; // 2 prime numbers

  // Check for factors from 2 to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a factor, num is not prime
    }
  }

  return true;
}

module.exports = { isPrime };
