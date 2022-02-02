function fishingBoat(input) {
  //   Вход
  // •	Бюджет на групата – цяло число в интервала [1…8000]
  const budget = Number(input[0]);
  // •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
  const season = input[1];
  // •	Брой рибари – цяло число в интервала [4…18]
  const fishermanNumber = Number(input[2]);

  let shipPrice = 0;

  switch (season) {
    // •	Цената за наем на кораба през пролетта е  3000 лв.
    case "Spring":
      shipPrice = 3000;
      if (fishermanNumber % 2 == 0) {
        shipPrice = shipPrice * 0.95;
      }
      break;
    // •	Цената за наем на кораба през лятото  е  4200 лв.
    case "Summer":
      shipPrice = 4200;
      if (fishermanNumber % 2 == 0) {
        shipPrice = shipPrice * 0.95;
      }
      break;
    // •	Цената за наем на кораба през есента е  4200 лв.
    case "Autumn":
      shipPrice = 4200;
      break;
    // •	Цената за наем на кораба през зимата е  2600 лв.
    case "Winter":
      shipPrice = 2600;
      if (fishermanNumber % 2 == 0) {
        shipPrice = shipPrice * 0.95;
      }
      break;
  }

  // •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
  if (fishermanNumber <= 6) {
    shipPrice = shipPrice * 0.9;
    // •	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
  } else if (fishermanNumber >= 7 && fishermanNumber <= 11) {
    shipPrice = shipPrice * 0.85;
    // •	Ако групата е от 12 нагоре  –  отстъпка от 25%.
  } else if (fishermanNumber >= 12) {
    shipPrice = shipPrice * 0.75;
  } else {
    console.log(`Shit hit the fan`);
  }

  let moneyLeft = budget - shipPrice;
  let moneyNeeded = Math.abs(moneyLeft);
  //   Изход
  if (budget >= shipPrice) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}
