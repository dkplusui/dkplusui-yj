let arr = [1,2,3]
function fun(arr){
  console.log(arr);
  let i = 0;
  if(i >= arr.length){
    console.log("中止");
  }else{
    let a = arr.filter(item => item !== i)
    fun(a)
  }
}
fun(arr)