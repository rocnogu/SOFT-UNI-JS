sumOfTwoNumbers = (input) => {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);

  let flag = false;
  let sequenceNumber = 0;

  for (let firstNumber = start; firstNumber <= end; firstNumber++) {
    for (let secondNumber = start; secondNumber <= end; secondNumber++) {
      sequenceNumber++;
      let res = firstNumber + secondNumber;

      if (res === magicNumber) {
        console.log(
          `Combination N:${sequenceNumber} (${firstNumber} + ${secondNumber} = ${magicNumber})`
        );
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  if (!flag) {
    console.log(
      `${sequenceNumber} combinations - neither equals ${magicNumber}`
    );
  }
};
sumOfTwoNumbers(["1", "10", "5"]);
