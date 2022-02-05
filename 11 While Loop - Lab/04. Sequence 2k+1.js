sequence = (input) => {
  let num = Number(input[0]);
  let one = 1;
  while (num >= one) {
    console.log(one);
    one = one * 2 + 1;
  }
};
sequence(["31"]);
