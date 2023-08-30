/*
 * @Author: WangYingJay code_yingjie@163.com
 * @Date: 2023-03-10 23:21:33
 * @LastEditors: WangYingJay code_yingjie@163.com
 * @LastEditTime: 2023-03-12 01:10:28
 * @FilePath: \leetCode\66.加一.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
  for(let i = len-1; i>=0;i--){
    digits[i]++
    digits[i] %= 10
    if(digits[i] !== 0){
      return digits
    }
  }

  const arr = new Array(len+1).fill(0)
  arr[0] = 1
  return arr
};
// @lc code=end  
console.log(plusOne([1,2,3,0]));
