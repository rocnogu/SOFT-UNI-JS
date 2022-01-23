function Sum(input) {
  const competitor1 = Number(input[0]);
  const competitor2 = Number(input[1]);
  const competitor3 = Number(input[2]);

  const totalTime = competitor1 + competitor2 + competitor3;
  let minutes = Math.floor(totalTime / 60); // get minutes
  let seconds = totalTime % 60; //  get seconds

  // if value < 10 add 0 ; Example: 2 => 02
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  console.log(minutes + ":" + seconds);
}
Sum(["35", "45", "44"]);
