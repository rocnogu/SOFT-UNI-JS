function square() {
  let a = 2;
  let answer = a * a;
  console.log(answer);
}

square();
////////////////////////////////

function square2(input) {
  let a = Number(input[0]);
  let answer = a * a;

  console.log(answer);
}

square2(["1", "2", "3", "4", "5", "6"]);
