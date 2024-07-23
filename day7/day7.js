// Code -1 --> https://leetcode.com/problems/longest-repeating-character-replacement/description/

function characterReplacement(s, k) {
  let left = 0;
  let charMap = new Map();
  let result = 0;
  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    charMap.set(char, (charMap.get(char) || 0) + 1);
    maxCount = Math.max(maxCount, charMap.get(char));

    while (right - left + 1 - maxCount > k) {
      charMap.set(s[left], charMap.get(s[left]) - 1);
      left++;
    }

    result = Math.max(result, right - left + 1);
  }
  return result;
}

console.log("char Replace-->", characterReplacement("ABAB", 2``));
