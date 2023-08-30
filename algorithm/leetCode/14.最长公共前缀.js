/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */
// @lc code=start
function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''
  let str = strs[0]
  for(let i = 1; i < strs.length;i++){
    while (strs[i].indexOf(str)!==0) {
      str = str.slice(0,str.length-1)
      if(str === ''){
        return str
      }
    }
  }
  return str
}
// @lc code=end
// console.log(longestCommonPrefix(["abccc", "abc", "abd"]))
