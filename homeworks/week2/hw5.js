function join(arr, concatStr) {
    let newarr = ''
    for(i = 0; i <= arr.length - 1; i++){
      if(i == arr.length - 1){
          newarr += arr[i]
      }else{
          newarr += arr[i] + concatStr
      }
    }
    return newarr
}
function repeat(str, times) {
  let result = ''
  for(i=1; i <= times; i++){
    result += str
  }
  return result
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
/*其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！

我們要實作的函式有兩個：join 以及 repeat。（再次強調，這一題要你自己實作這些函式，所以你不會用到內建的join以及repeat）

join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。
取出陣列每個元素
加上需加上自原
加入新字串



repeat 的話就是回傳重複 n 次之後的字串。


*/