function Godzilla(input) {
  const budgetMovie = Number(input[0]);
  const extrasNumber = Number(input[1]);
  let clothingPrice = Number(input[2]);
  // декорът за филма е на стойност 10% от бюджета.
  const decor = budgetMovie * 0.1;
  // При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.
  let discountedClothingPrice = clothingPrice * extrasNumber;
  if (extrasNumber > 150) {
    clothingPrice = clothingPrice - clothingPrice * 0.1;
  }
  //
  const costClothing = extrasNumber * clothingPrice;
  let remainingMoney = budgetMovie - decor - costClothing;
  // Ако парите за декора и дрехите са повече от бюджета:
  if (decor + costClothing > budgetMovie) {
    remainingMoney *= -1;
    console.log("Not enough money!");
    console.log(`Wingard needs ${remainingMoney.toFixed(2)} leva more.`);
  }
  // Ако парите за декора и дрехите са по малко или равни на бюджета:
  else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${remainingMoney.toFixed(2)} leva left.`
    );
  }
  //
}
//
Godzilla(["9587.88", "222", "55.68"]);

// Резултатът трябва да е форматиран до втория знак след десетичната запетая.
