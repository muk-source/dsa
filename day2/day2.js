// Code 1 - https://leetcode.com/problems/product-of-array-except-self/description/

function productExceptSelf(nums) {
  var n = nums.length;
  var answer = new Array(n).fill(1);
  var leftProduct = new Array(n).fill(1);   
  var rightProduct = new Array(n).fill(1);  

  for (var i = 1; i < n; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }

  for (var j = n - 2; j >= 0; j--) {
    rightProduct[j] = rightProduct[j + 1] * nums[j + 1];
  }

  for (var i = 0; i < n; i++) {
    answer[i] = leftProduct[i] * rightProduct[i];
  }

  return answer;
}

console.log("product Except Self", productExceptSelf([1, 2, 3, 4]));

// Code 2 - https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board) {
  var seen = new Set();
  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      var num = board[r][c];

      var row = `${num} in row ${r}`;
      var col = `${num} in col ${c}`;
      var box = `${num} in box ${Math.floor(r / 3)} - ${Math.floor(c / 3)}`;

      if (seen.has(row) || seen.has(col) || seen.has(box)) {
        return false;
      }
      seen.add(row)
      seen.add(col)
      seen.add(box)
    }
  }
  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log("Valid Sudoku", isValidSudoku(board));
