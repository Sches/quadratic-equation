module.exports = function solveEquation(equation) {
  // your implementation
  var reg = / /g;
  equation = equation.replace(reg, '');
  var position1 = equation.indexOf("*", 0);
  var a = equation.substring(0, position1);
  position1 += 4;
  var position2 = equation.indexOf("*", position1);
  var b = equation.substring(position1, position2);
  position2 += 2;
  var c = equation.substring(position2);

  var d = Math.round(Math.sqrt(b*b - 4*a*c));
  var x1 = ((-1)*b + d)/(2*a);
  var x2 = ((-1)*b - d)/(2*a);
  var x = [];
  x.push(x1, x2);
  return x.sort((a, b) => a-b);
}
