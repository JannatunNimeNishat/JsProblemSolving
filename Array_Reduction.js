/*
6.Task: Array Reduction

Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.
*/


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to calculate the sum of all even numbers using reduce
const sumOfEvenNumbers = (array) => {
  return array.reduce((accumulator, currentValue) => {
    // Check if the current value is even
    if (currentValue % 2 === 0) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0); // Initial value of accumulator is 0
};

// Calculate the sum of even numbers in the array
const result = sumOfEvenNumbers(numbers);


console.log(`Sum of even numbers: ${result}`);
