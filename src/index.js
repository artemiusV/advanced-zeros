module.exports = function getZerosCount(number, base) {
 
 
var zero = number;
  
for (var i = 2; i <= base; i++) {
    var x = 0;
    var y = number;

    while (base % i == 0) {
      var z = 0;
      z++;
      base = Math.floor(base/i);
    
    while (y/i > 0) { 
      x += Math.floor(y/i);
      y = Math.floor(y/i);
    }
    zero = Math.floor(Math.min(zero, x/z));
  }
}
return zero;
}