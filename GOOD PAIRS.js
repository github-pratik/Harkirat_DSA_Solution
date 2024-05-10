//Link - https://leetcode.com/problems/number-of-good-pairs/
//Learning Purpose

//Basic Approach
var numIdenticalPairs = function(nums) {
        let count =0;
    for(let i=0; i<=nums.length; i++){
        //console.log("First Loop "+ i + "i")
        for(let j=i+1; j<nums.length; j++){
            //console.log("Second Loop "+ j +"j "+ i + "i")
            if(nums[i] == nums[j] && i<j){
                count+=1;
            }
        }
    }
 return count;
};

//Optimal Approach
var numIdenticalPairs = function (nums) {

    let count = 0;
    const freq = {}; // Use an object for frequency tracking in JavaScript

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (freq[num]) {
    count += freq[num];
  }
  freq[num] = (freq[num] || 0) + 1; // Initialize to 0 if not present
}

return count;
};
