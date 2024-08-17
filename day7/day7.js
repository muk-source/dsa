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

// Code - 2 --> https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(s1, s2) {
  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);

  let acode = "a".charCodeAt(0);

  function arrayMatches(array1, array2) {
    for (let i = 0; i < 26; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - acode]++;
    s2Count[s2.charCodeAt(i) - acode]++;
  }

  if (arrayMatches(s1Count, s2Count)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    s2Count[s2.charCodeAt(i) - acode]++;
    s2Count[s2.charCodeAt(i - s1.length) - acode]--;

    if (arrayMatches(s1Count, s2Count)) {
      return true;
    }
  }
  return false;
}

console.log(checkInclusion("ab", "eidboaoo"));
