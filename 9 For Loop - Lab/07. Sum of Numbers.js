function sumNumbers(input) {
  let n = String(input[0]);
  // let n = "" + input[0];

  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    let number = Number(n[i]);
    sum += number;
  }
  console.log("The sum of the digits is:" + sum);
}
sumNumbers(["1234"]);
