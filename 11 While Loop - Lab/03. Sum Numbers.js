numbers = (input) => {
  let index = 0;
  let num = Number(input[index++]);
  let sum = 0;
  while (sum < num) {
    let tempNum = Number(input[index++]);
    sum += tempNum;
  }
  console.log(sum);
};
