// function fun(nums, target) {
//     var center = Math.floor(nums.length / 2);
//     // console.log(());
//     return center;
// }
// var arr = [1, 2, 3, 4, 5];
// console.log(fun(arr, 2));
// let result = -1;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === target) {
//     result = i
//   }
// }
// return result;

// const list = [];
// for (let i = 0; i < 10000000; ++i) {
//   list.push(i)
// }
// console.time("方案a")
// for (let i = 0; i < list.length; ++i) {
//   const value = list[i];
// }
// console.timeEnd("方案a")
// console.time("方案b")
// for (let i = 0, len = list.length; i < len; ++i) {
//   const value = list[i];
// }
// console.timeEnd("方案b")
// console.time("方案c")
// for (let i = list.length - 1; i > -1; --i) {
//   const value = list[i];
// }
// console.timeEnd("方案c")

// 1 1 2 3 5 8 13 21 34 55 89
// console.time('递归')
function fun (nums, n) {
  if (n < 3) {
    return 1
  } else {
    let newNums = nums
    if (newNums.length < 3) {
      newNums = [1, 1, 2]
    }
    let len = newNums.length - 1 || 0;
    if (len >= n) return newNums[len];
    let newArr = newNums;
    if (len < n - 1) {
      newArr.push(newNums[len] + newNums[len - 1])
      fun(newArr, n)
    }
    let result = BigInt(newArr[newArr.length - 1])
    return result
  }
}

// console.log(fun([], 30));
fun([], 30)
// console.timeEnd('递归')

// console.time("for循环")
let arr = [1, 1, 2]
for (let i = 4; i <= 30; ++i) {
  arr.push(arr[i - 2] + arr[i - 3])
}
// console.timeEnd("for循环")


let p = {
  name: '小明'
}

Object.defineProperty(p, "name", {
  configurable: false
})
console.log(p);
delete p.name;
console.log(p);