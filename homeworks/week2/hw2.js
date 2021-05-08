function capitalize(str) {
    var result = ''
    if (str[0] >= 'a' && str[0] <= 'z'){
         result += str[0].toUpperCase()
         for (i=1;i <= str.length-1;i++){
             result += str[i]
         }
        }
      else {
          result += str
      }
    return result
    }
    


console.log(capitalize('hello'));
