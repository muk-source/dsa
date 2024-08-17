// Code - 1 --> https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures) {
  let n = temperatures.length;
  let stack = [];
  let answer = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }
  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));

// brute force method for above question

function dailyTemp2(temp) {
  let answers = new Array(temp.length).fill(0);
  for (let i = 0; i < temp.length; i++) {
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[j] > temp[i]) {
        answers[i] = j - i;
        break;
      }
    }
  }
  return answers;
}
console.log(dailyTemp2([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemp2([30, 40, 50, 60]));
console.log(dailyTemp2([30, 60, 90]));

// Code 2 --> https://leetcode.com/problems/binary-search/description/

function binarySearch(nums,target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target) {
            return mid;
        }else if(nums[mid] > target) {
            right = mid - 1;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-1,0,3,5,9,12],9));
console.log(binarySearch([-1,0,3,5,9,12],2));

