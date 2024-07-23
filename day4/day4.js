// Code 1 https://leetcode.com/problems/valid-palindrome/description/

const isPalindrome = (str) => {
  let str1 = str.toLowerCase().replace(/[^0-9a-z]/g, "");
  let str2 = str
    .toLowerCase()
    .replace(/[^0-9a-z]/g, "")
    .split("")
    .reverse()
    .join("");

  return str1 === str2;
};

console.log("isPalindrome-->", isPalindrome("A man, a plan, a canal: Panama"));

// Code 2 https://leetcode.com/problems/3sum/description/

const threeSum = (nums) => {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }
  return result;
};

console.log("3sum", threeSum([-1, 0, 1, 2, -1, -4]));
