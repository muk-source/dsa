// Code 1 --> https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

console.log("maxprofit-->", maxProfit([7, 1, 5, 3, 6, 4]));

// Code 2 --> https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  let smap = new Map();

  for (let right = 0; right < s.length; right++) {
    if (smap.has(s[right])) {
        // we are using Math.max so that left does not move backward
      left = Math.max(smap.get(s[right]) + 1, left);
    }
    smap.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log("longest substring", lengthOfLongestSubstring("abcabcbb"));
