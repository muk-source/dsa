// Code - 1 --> https://leetcode.com/problems/reverse-integer/description/

function reverseInteger(x) {
  let temp = Math.abs(x); // handle the case if the number is negative
  let reverseNumber = 0;
  while (temp > 0) {
    let rem = temp % 10;
    reverseNumber = reverseNumber * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  if (reverseNumber > Math.pow(2, 31) - 1) {
    // handle the case for 2^31 - 1
    return 0;
  }
  return x < 0 ? -reverseNumber : reverseNumber; // return according the positive or negative number
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));

// Code 2 --> https://leetcode.com/problems/missing-number/description/

function missingNumber(nums) {
  let n = nums.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
  }
  sum2 = Math.floor((n * (n + 1)) / 2);
  return sum2 - sum1;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
