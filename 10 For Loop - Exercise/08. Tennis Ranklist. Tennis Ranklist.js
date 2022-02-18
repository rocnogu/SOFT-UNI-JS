tennisRanklist = (input) => {
  let index = 0;
  let tournamentsCount = Number(input[index++]);
  let initialPoints = Number(input[index++]);
  let pointsWon = 0;
  let tournamentsWon = 0;
  //
  //
  for (let i = 0; i < tournamentsCount; i++) {
    let reachedTournamentStage = input[index++];
    if (reachedTournamentStage === "W") {
      pointsWon += 2000;
      tournamentsWon++;
    } else if (reachedTournamentStage === "F") {
      pointsWon += 1200;
    } else if (reachedTournamentStage === "SF") {
      pointsWon += 720;
    }
  }
  let finalPoints = pointsWon + initialPoints;
  let averagePoints = Math.floor(pointsWon / tournamentsCount);

  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${averagePoints}`);
  //
  let procentWon = (tournamentsWon / tournamentsCount) * 100;
  console.log(`${procentWon.toFixed(2)}%`);
};

tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
