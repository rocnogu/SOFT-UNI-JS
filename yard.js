function yard(input) {
  let sqM = input;
  let price = sqM * 7.61;
  let discount = (price / 100) * 18;
  let num = price - discount;
  let finalPrice = num.toFixed(1);

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

yard(150);
