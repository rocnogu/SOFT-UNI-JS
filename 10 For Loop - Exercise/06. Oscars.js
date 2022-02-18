oscars = (input) => {
  let index = 0;
  let actorName = input[index++];
  // index = 1
  let points = Number(input[index++]);
  // index = 2
  let juryCount = Number(input[index++]);
  // index = 3

  let isNomenee = false;
  for (let i = 0; i < juryCount; i++) {
    let name = input[index++];
    // index = 3++
    let juryPoints = input[index++];
    // index = 4++

    points += (name.length * juryPoints) / 2;
    if (points > 1250.5) {
      isNomenee = true;
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (!isNomenee) {
    let neededPoint = Math.abs(1250.5 - points);
    console.log(`Sorry, ${actorName} you need ${neededPoint.toFixed(1)} more!`);
  }
};
oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
