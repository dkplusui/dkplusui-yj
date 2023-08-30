/*
 * @Author: WangYingJay code_yingjie@163.com
 * @Date: 2023-02-24 18:51:42
 * @LastEditors: WangYingJay code_yingjie@163.com
 * @LastEditTime: 2023-03-10 23:07:05
 * @FilePath: \leetCode\9.回文数.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 *
 * https://leetcode.cn/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.38%)
 * Likes:    2424
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 2.3M
 * Testcase Example:  '121'
 *
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 
 * 例如，121 是回文，而 123 不是。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：x = 121
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：x = 10
 * 输出：false
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= x <= 2^31 - 1
 * 
 * 
 * 
 * 
 * 进阶：你能不将整数转为字符串来解决这个问题吗？
 * 
 */

// @lc code=start
// function isPalindrome(x: number) { 
//   const str:string = x.toString()
//   let left = 0, right = str.length-1;
//   while(left < right){
//     if(str[left] !== str[right])return false
//     left++
//     right--
//   }
//   return true
// };
// function isPalindrome(x: number):boolean { 
//   if(x<0)return false
//   if(x<10)return true
//   return x + '' === (x+'').split('').reverse().join('')
// };
/**
 * @description: 
 * @param {*} x
 * @return {*}
 */
function isPalindrome(x) { 
  const arr = `${x}`.split('');
  if(arr.length === 1) return true
  for(let i = 0; i < arr.length; i++){
    let j = arr.length-1-i;
    if(i<=j){
      if(arr[i] !== arr[j]){
        return false
      }
    }else{
      return true
    }
  }
};
// @lc code=end
// console.log(isPalindrome(1211211));

