// 10-factorial.js

// Recursive factorial function
const factorial = (n) => {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Get the first argument and cast it to integer
const arg = parseInt(process.argv[2]);

// Compute factorial
const result = factorial(arg);

// Print the result
console.log(result);
