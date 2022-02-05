maxNumber = (input) => {
  let index = 0;
  let command = input[index++];

  // let minNumber = Number.MIN_SAFE_INTEGER;
  // let minNumber = Number.NEGATIVE_INFINITY;
  //   if (command !== "Stop") {
  //     minNumber = Number(command);
  //   }

  let minNumber = -99999999999999999999999999;
  while (command !== "Stop") {
    let num = Number(command);

    // get the bigest number from the array
    if (minNumber < num) {
      minNumber = num;
    }

    command = input[index++];
  }
  console.log(minNumber);
};

maxNumber(["100", "99", "80", "70", "Stop"]);
