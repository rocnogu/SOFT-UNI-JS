function projects2(input) {
  let dogFood = Number(input[0]);
  let catFood = Number(input[1]);
  let dogFoodPrice = dogFood * 2.5;
  let catFoodPrice = catFood * 4;
  let price = catFoodPrice + dogFoodPrice;
  //let price = catFood * 4 + dogFoodPrice;

  // `cat Food is ${catFood}pc and cost ${catFoodPrice}. dog Food is ${dogFood}pc. and cost ${dogFoodPrice}`
  console.log(price);
}
