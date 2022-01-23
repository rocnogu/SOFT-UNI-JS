function yard(input) {
  let sqM = Number(input);
  let price = sqM * 7.61;
  let discount = price * 0.18;
  let finalPrice = price - discount;
  // let finalPrice = price - price * 0.18;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
