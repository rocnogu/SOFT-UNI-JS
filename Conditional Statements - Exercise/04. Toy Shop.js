function Toy(input) {
  const tripPrice = Number(input[0]);
  const puzzlesNumber = Number(input[1]);
  const dollsNumber = Number(input[2]);
  const teddyNumber = Number(input[3]);
  const minionsNumber = Number(input[4]);
  const trucksNumber = Number(input[5]);
  //
  const puzzlesPrice = 2.6;
  const dollsPrice = 3;
  const teddyPrice = 4.1;
  const minionsPrice = 8.2;
  const trucksPrice = 2;
  //
  const puzzlesTotalPrice = puzzlesPrice * puzzlesNumber;
  const dollsTotalPrice = dollsPrice * dollsNumber;
  const teddyTotalPrice = teddyPrice * teddyNumber;
  const minionsTotalPrice = minionsPrice * minionsNumber;
  const trucksTotalPrice = trucksPrice * trucksNumber;
  // total Toys Price
  const ToysPrice =
    puzzlesTotalPrice +
    dollsTotalPrice +
    teddyTotalPrice +
    minionsTotalPrice +
    trucksTotalPrice;
  //
  let discount = 0;
  const totalNumberToys =
    puzzlesNumber + dollsNumber + teddyNumber + minionsNumber + trucksNumber;
  if (totalNumberToys >= 50) {
    discount = ToysPrice * 0.25;
  }
  const totalToysPrice = ToysPrice - discount;
  const rent = totalToysPrice * 0.1;
  const profit = totalToysPrice - rent;
  let moneyLeft = profit - tripPrice;
  //
  if (profit > tripPrice) {
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    moneyLeft *= -1;
    console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
  }
}
//
Toy(["140.8", "1", "2", "3", "4", "5"]);
