// Code - 1 --> https://leetcode.com/problems/container-with-most-water/description/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currentHeight = Math.min(height[left], height[right]);
    const currentWidth = right - left;
    const area = currentHeight * currentWidth;
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log("MaxArea-->", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Code -2 --> https://leetcode.com/problems/trapping-rain-water/description/

// Intution --> To solve this problem, we need to find out how much water each bar can trap. The amount of water above a bar 
// is determined by the height of the tallest bars to its left and right. The water trapped above each bar 
// is the minimum of these two heights minus the height of the bar itself.

function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let left_max = 0;
  let right_max = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] > left_max) {
        left_max = height[left];
      } else {
        water += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] > right_max) {
        right_max = height[right];
      } else {
        water += right_max - height[right];
      }
      right--;
    }
  }
  return water;
}

console.log(
  "trapping rain water-->",
  trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
);
