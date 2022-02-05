minNumber = (input) => {
  let index = 0;
  let command = input[index++];

  let minNumber = 99999999999999999999999999;
  while (command !== "Stop") {
    let num = Number(command);

    // get the bigest number from the array
    if (minNumber > num) {
      minNumber = num;
    }

    command = input[index++];
  }
  console.log(minNumber);
};
minNumber(["-10", "20", "-30", "Stop"]);
