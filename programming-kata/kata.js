const conditionalSum = (values, condition) => {
  let sum = 0;
  for (const num of values) {
    if (condition === "even" && num % 2 === 0) {
        sum += num;
    }
    else if (condition === "odd" && num % 2 != 0) {
        sum += num;
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// Expected Output
// 6
// 9
// 144
// 0