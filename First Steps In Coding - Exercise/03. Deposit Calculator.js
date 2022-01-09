function Deposit(input) {
  let depositAmount = Number(input[0]);
  let depositTerm = Number(input[1]);
  let AnnualInterestRate = Number(input[2]);

  let accruedInterest = depositAmount * (AnnualInterestRate / 100);
  let interestPerMonth = accruedInterest / 12;
  let amount = depositAmount + depositTerm * interestPerMonth;

  console.log(amount);
}
