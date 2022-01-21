///////////////////////////////////////////
var dg = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
//
function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  var x = s.indexOf(".");
  var n = s.split("");
  for (var i = 0; i < x; i++)
    if (n[i] != 0) {
      str += dg[n[i]] + " ";
      console.log(s);
    }
  console.log();
}
//
toWords(18);
