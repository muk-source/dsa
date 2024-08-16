// Code 1 --> https://leetcode.com/problems/minimum-window-substring/description/

function minWindow(s, t) {
  if (t.length > s.length) return "";

  let tMap = new Map();
  let windowMap = new Map();

  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let result = [-1, 0, 0];
  let formed = 0;
  let required = tMap.size;

  while (right < s.length) {
    const ch = s[right];
    windowMap.set(ch, (windowMap.get(ch) || 0) + 1);

    if (tMap.has(ch) && windowMap.get(ch) === tMap.get(ch)) {
      formed++;
    }

    while (formed === required) {
      const char = s[left];
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        result = [minLength, left, right];
      }

      windowMap.set(char, windowMap.get(char) - 1);
      if (tMap.has(char) && windowMap.get(char) < tMap.get(char)) {
        formed--;
      }
      left++;
    }
    right++;
  }
  return result[0] === -1 ? "" : s.substring(result[1], result[2] + 1);
}

// console.log(minWindow("ADOBECODEBANC", "ABC"));
// console.log(minWindow("a", "a"));
// console.log(minWindow("a", "aa"));

// Code - 2-- https://leetcode.com/problems/sliding-window-maximum/description/

function maxSlidingWindow(nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    console.log("Iteration index-->", i);


    // Ensure that the deque contains only indices that fall within the current sliding window [i - k + 1, i].
    while (deque.length > 0 && deque[0] < i - k + 1) {
      console.log("shift is implementing");
      deque.shift();
      console.log("shifted Deque-->", deque);
    }

    // this condition is used for maintaining the deque in decreasing order
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      console.log("pop is implenting");
      deque.pop();
      console.log("Popped Deque-->", deque);
    }
    deque.push(i);
    console.log("simple Deque-->", deque);

     // Add the maximum of the current window to the result
    if (i >= k - 1) {
      console.log("push is implementing");
      result.push(nums[deque[0]]);
      console.log("result", result);
    }
  }
  return result;
}


// Brute Force Approach 
function maxSlidingWindow2(nums,k) {
    let result = [];
    for(let i=0;i<=nums.length - k;i++) {
        let window = nums.slice(i,i+k);
        let max = Math.max(...window);
        result.push(max);
    }
    return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3));
