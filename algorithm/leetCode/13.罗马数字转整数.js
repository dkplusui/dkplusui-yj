/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

const romanToiIt = s => {
  let num = 0
  const obj = {
    I: 1,
    V: 5, 
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  for (let i = 0, len = s.length; i < len; ++i) {
    if(obj[s[i]] < obj[s[i+1]]){
      num -= obj[s[i]];
    }else{
      num += obj[s[i]];
    }
  }
  return num ;
}

console.log(romanToiIt('MCMXCIV'));








// @lc code=start
// function romanToInt(s) {
//   const obj= {
//     I:1,
//     V:5,
//     X:10,
//     L:50,
//     C:100,
//     D:500,
//     M:1000
//   }
//   let num = 0;
//   for(let i = 0, len = s.length;i<len; i++){
//     if(obj[s[i]] < obj[s[i+1]]){
//       num -= obj[s[i]]
//     }else{
//       num += obj[s[i]]
//     }
//   }
//   return num
// };
// console.log(romanToInt('IVXL'))

// @lc code=end
