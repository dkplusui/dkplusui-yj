/*
 * @Author: WangYingJay code_yingjie@163.com
 * @Date: 2023-03-11 22:00:44
 * @LastEditors: WangYingJay code_yingjie@163.com
 * @LastEditTime: 2023-03-12 23:05:23
 * @FilePath: \leetCode\67.二进制求和.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let carry = 0
  let result = ''
  while (a.length > 0 || b.length > 0) {
    const aDigit = parseInt(a.charAt(a.length - 1)) || 0
    const bDigit = parseInt(b.charAt(b.length - 1)) || 0
    const sum = aDigit + bDigit + carry
    if (sum >= 2) {
      result = (sum % 2) + result
      carry = 1
    } else {
      result = sum + result
      carry = 0
    }
    a = a.slice(0, -1)
    b = b.slice(0,-1)

  }
  if (carry === 1) {
    result = '1' + result
  }
  return result
};
// @lc code=end

