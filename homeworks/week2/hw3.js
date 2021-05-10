function reverse(str) {
  var newStr = ''
  for (i = str.length - 1; i >= 0;i--){
    newStr += str[i]
  }
  console.log(newStr)
}

reverse('1abc2');
