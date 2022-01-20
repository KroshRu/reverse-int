module.exports = function reverse (n) {
    let result='';
    n= Math.abs(n);
  for (var i=0; i<n.toString().length; ++i)
  {
      let a= Math.floor(n/(10**i)) %10;
      result=result.toString()+a.toString();
  }
  return Number(result);
}
