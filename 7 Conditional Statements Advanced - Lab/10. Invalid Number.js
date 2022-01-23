function invalidNumber(input) {
  const inputNumber = Number(input[0]);

  if (inputNumber === 0 || (inputNumber >= 100 && inputNumber <= 200)) {
  } else {
    console.log("invalid");
  }
}
