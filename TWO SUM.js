//TWO SUM
//Link - https://leetcode.com/problems/two-sum/description/
//Javascript
//Learning purpose

//1st Approach - basic logic using 2 loop
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; // Return the indices
      }
    }
  }
  return [];
};

//Optimal Approach - Using Mapping
var twoSum = function(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const needed = target - currentNum;
    if (seen.hasOwnProperty(needed)) {
      return [seen[needed], i];
    }
    seen[currentNum] = i;
  }
  return [];
};
