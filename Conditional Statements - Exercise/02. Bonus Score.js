function BonusScore(input) {
  const numeral = Number(input[0]);
  let bonus = 0;
  // Number(bonus)
  if (numeral <= 100) {
    bonus = 5;
  } else if (numeral > 1000) {
    bonus = numeral * 0.1;
  } else {
    bonus = numeral * 0.2;
  }

  if (numeral % 2 == 0) {
    bonus += 1;
  } else if (numeral % 10 == 5) {
    bonus += 2;
  }

  const totalPoints = bonus + numeral;

  console.log(bonus, totalPoints);
}
BonusScore(["20"]);
