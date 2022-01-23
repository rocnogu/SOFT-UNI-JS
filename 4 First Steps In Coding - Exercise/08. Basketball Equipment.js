function Basketball(input) {
  const annualBasketballFee = Number(input);
  const BasketballSneakers = 0.6 * annualBasketballFee;
  const BasketballOutfit = 0.8 * BasketballSneakers;
  const BasketballBall = 0.25 * BasketballOutfit;
  const BasketballAccessories = 0.2 * BasketballBall;

  const JesseExpenses =
    annualBasketballFee +
    BasketballSneakers +
    BasketballOutfit +
    BasketballBall +
    BasketballAccessories;

  console.log(JesseExpenses);
}
