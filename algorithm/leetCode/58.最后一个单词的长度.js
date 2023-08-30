/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  while (s[s.length-1] === ' ') s = s.slice(0,-1)
  return s.split(' ').pop().length
};
// @lc code=end

