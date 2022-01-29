function evenPowersOf2(input) {
  let n = Number(input);
  for (let i = 0; i <= n; i += 2) {
    console.log(Math.pow(2, i));
  }
}

function evenPowersOf2(input) {
  let n = Number(input);
  let nTwo = 1;
  for (let i = 0; i <= n; i += 2) {
    console.log(nTwo);
    nTwo = nTwo * 2 * 2;
  }
}
