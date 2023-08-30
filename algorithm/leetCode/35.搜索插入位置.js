/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length-1;
  while (left+1<right) {
    let mid = Math.floor((left + right) /2)
    if(nums[mid] === target){
      return mid
    }else if(nums[mid] < target){
      left = mid
    }else{
      right = mid
    }
  }

  if(nums[left] >= target) return left
  if(nums[right] >= target) return right

  return right + 1
}
// @lc code=end


