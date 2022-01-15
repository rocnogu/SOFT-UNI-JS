function Area(input) {
  let figure = input[0];
  let numberOne = Number(input[1]);
  let numberTwo = Number(input[2]);
  let numberThree = Number(input[3]);

  if (figure == "square") {
    console.log(numberOne * numberOne);
  } else if (figure == "rectangle") {
    console.log(numberOne * numberTwo);
  } else if (figure == "circle") {
    console.log(numberOne * numberOne * Math.PI);
  } else if (figure == "triangle") {
    console.log((numberOne * numberTwo) / 2);
  } else {
    console.log("there is no input");
  }
}
