// code 1 --> https://leetcode.com/problems/contains-duplicate/description/

const containsDuplicate = (nums) => {
  let numSet = new Set();
  for (let i of nums) {
    if (numSet.has(i)) {
      return true;
    } else {
      numSet.add(i);
    }
  }
  return false;
};

console.log(
  "ContainsDuplicate",
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
);

// Code 2 --> https://leetcode.com/problems/valid-anagram/description/

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  s = s.toLowerCase().split("").sort().join("");
  t = t.toLowerCase().split("").sort().join("");

  return s === t;
};

console.log("Anagram-->", isAnagram("anagram", "nagaram"));

// Code 3 --> https://leetcode.com/problems/two-sum/description/

const twoSum = (nums, target) => {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }
  return null;
};

console.log("Two Sum-->", twoSum([3, 3], 6));

// Code 4 --> https://leetcode.com/problems/group-anagrams/description/

const groupAnagram = (strArray) => {
  let anagramMap = new Map();
  for (let word of strArray) {
    let sortedWord = word.split("").sort().join("");

    if (anagramMap.has(sortedWord)) {
      anagramMap.get(sortedWord).push(word);
    } else {
      anagramMap.set(sortedWord, [word]);
    }
  }
  return Array.from(anagramMap.values());
};

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const strs2 = [""];
const strs3 = ["a"];

console.log(groupAnagram(strs1));
console.log(groupAnagram(strs2));
console.log(groupAnagram(strs3));

// Code 5 --> https://leetcode.com/problems/top-k-frequent-elements/description/

const kfrequent = (nums, k) => {
  // declaring the object
  let obj = {};
  // calculating the freq
  for (let num of nums) {
    if (obj[num] === undefined) {
      obj[num] = 1;
    } else {
      obj[num] = obj[num] + 1;
    }
  }

  // Object.entries give two dim array with key and value as one element of array
  let sortedFreq = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(sortedFreq[i][0]);
  }
  return result;
};

console.log("k frequent ->", kfrequent([1, 1, 1, 2, 2, 3], 2));
