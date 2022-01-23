function Area(input) {
  let figure = input[0];
  let numberOne = Number(input[1]);
  let numberTwo = Number(input[2]);

  if (figure == "square") {
    console.log(numberOne * numberOne);
  } else if (figure == "rectangle") {
    let result = numberOne * numberTwo;
    console.log(result.toFixed(3));
  } else if (figure == "circle") {
    let result = numberOne * numberOne * Math.PI;
    console.log(result.toFixed(3));
  } else if (figure == "triangle") {
    let result = (numberOne * numberTwo) / 2;
    console.log(result.toFixed(3));
  } else {
    console.log("there is no input");
  }
}
