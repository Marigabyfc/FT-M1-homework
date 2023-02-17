'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var arr = []
  arr = num.split("")
  arr.reverse()
  var sum = 0
  for (var i= 0; i < arr.length ; i++){
   sum = sum + arr[i] * Math.pow(2, i)
  }
 return sum ;
}

function DecimalABinario(num) {
  // tu codigo aca
    if (num <= 0) return "0"
    var array = []
    while (num > 0){ 
     array.unshift(num % 2)
     num = Math.floor(num/2)
    }
    return array.join("")
  }
    
  

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}


