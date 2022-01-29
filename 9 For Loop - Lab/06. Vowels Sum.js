function vowelsSum(input) {
  let txt = input[0];

  let sum = 0;
  let a = 1;
  let e = 2;
  let i = 3;
  let o = 4;
  let u = 5;

  for (let n = 0; n < txt.length; n++) {
    let char = txt[n];
    if (char === "a") {
      sum += a;
    }
    if (char === "e") {
      sum += e;
    }
    if (char === "i") {
      sum += i;
    }
    if (char === "o") {
      sum += o;
    }
    if (char === "u") {
      sum += u;
    }
  }
  console.log(sum);
}
vowelsSum(["hello"]);

function vowelsSum(input) {
  let txt = input[0];

  let sum = 0;
  let a = 1;
  let e = 2;
  let i = 3;
  let o = 4;
  let u = 5;

  for (let n = 0; n < txt.length; n++) {
    let char = txt[n];

    switch (char) {
      case "a":
        sum += a;
        break;
      case "e":
        sum += e;
        break;
      case "i":
        sum += i;
        break;
      case "o":
        sum += o;
        break;
      case "u":
        sum += u;
        break;
    }
  }
  console.log(sum);
}
