function Food(input) {
  const chickenMenu = 10.35;
  const fishMenu = 12.4;
  const vegetarianMenu = 8.15;
  const delivery = 2.5;

  const NumberChickenMenus = Number(input[0]);
  const NumberFishMenus = Number(input[1]);
  const NumberVegetarianMenus = Number(input[2]);

  const orderedChickenMenu = chickenMenu * NumberChickenMenus;
  const orderedFishMenu = fishMenu * NumberFishMenus;
  const orderedVegetarianMenu = vegetarianMenu * NumberVegetarianMenus;
  const totalBillExcludingDesert =
    orderedChickenMenu + orderedFishMenu + orderedVegetarianMenu;

  const desert = 0.2 * totalBillExcludingDesert;

  const totalBill = totalBillExcludingDesert + desert;
  const totalBillWithDelivery = totalBill + delivery;

  console.log(totalBillWithDelivery);
}
