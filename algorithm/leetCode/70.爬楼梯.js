class Solution{
  count(n){
    if(n<=2) return n;
    let a = 1,b = 2;
    for(let i=3;i<=n;i++){
      b = a + b
      a = b
      console.log(b,i);
    }
    return b;
  }
}
const s = new Solution();
// console.log(s.count(5))

