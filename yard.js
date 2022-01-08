function yard(input) {
  let sqM = input;
  let price = sqM * 7.61;
  let discount = price * 0.18;
  let finalPrice = price - discount;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

yard(150);
