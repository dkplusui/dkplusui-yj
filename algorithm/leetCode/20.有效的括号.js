/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} 
 * @return {boolean}
 */

const isValid = (s) => {
  const map = {
    '(':')',
    '{':'}',
    '[':']'
  }
  const arr = []
  for(let i = 0; i < s.length; i++){
    let v = s[i]
    if(map[v]){
      arr.push(map[v])
    }else{
      if(arr.pop() !== v){
        return false
      }
    }
  }
  return arr.length === 0
}

console.log(isValid('()[{]}'));

// @lc code=end
