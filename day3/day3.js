/* 
Encode and Decode Strings

Design an algorithm to encode a list of strings to a single string. The encoded string should be able to be decoded back to the original list of strings.
Requirements

    Encode Function:
        Takes a list of strings and returns a single encoded string.
    Decode Function:
        Takes an encoded string and returns the original list of strings.

Constraints

    The input strings can contain any characters, including the delimiter characters used in the encoding process.
    The encoded string must uniquely represent the original list of strings such that the decoding process accurately restores the original list.

*/

function encode(strs) {
  let encodedStr = "";
  for (let str of strs) {
    encodedStr += str.length + "#" + str;
  }

  return encodedStr;
}

function decode(s) {
  let i = 0;
  let decodedStr = [];
  while (i < s.length) {
    let j = i;
    while (s[j] != "#") {
      j++;
    }
    let length = parseInt(s.slice(i, j));
    let str = s.slice(j + 1, j + 1 + length);
    decodedStr.push(str);
    i = j + 1 + length;
  }
  return decodedStr;
}

const strs = ["hello", "world", "encode", "decode"];
const encodedString = encode(strs);
console.log("encodedString", encodedString);

const decodedStringArray = decode(encodedString);
console.log("decodedString", decodedStringArray);

const strs2 = ["#", "##", "###"];
const encodedStr2 = encode(strs2);
console.log("Encoded:", encodedStr2);

const decodedStrs2 = decode(encodedStr2);
console.log("Decoded:", decodedStrs2);

// Code 2 https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums) {
  var numSet = new Set(nums);
  var longest = 0;
  for (var num of numSet) {
    if (numSet.has(num - 1)) {
      continue;
    }
    var currNum = num;
    var currMax = 1;

    while (numSet.has(currNum + 1)) {
      currNum = currNum + 1;
      currMax = currMax + 1;
    }
    longest = Math.max(longest, currMax);
  }
  return longest;
}

console.log(
  "longest Consecutive-->",
  longestConsecutive([100, 4, 200, 1, 3, 2])
);
