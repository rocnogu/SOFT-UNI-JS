cleverLily = (input) => {
  let lilyAge = Number(input[0]);
  let washmachinePrice = Number(input[1]);
  let toyprice = Number(input[2]);

  let money = 0;
  let tempMoney = 10;
  let toyCounter = 0;

  for (let i = 1; i <= lilyAge; i++) {
    if (i % 2 === 0) {
      money += tempMoney;
      tempMoney += 10;
      money -= 1;
    } else {
      toyCounter++;
    }
  }
  money += toyCounter * toyprice;

  let moneyLeft = Math.abs(money - washmachinePrice).toFixed(2);

  if (washmachinePrice > money) {
    console.log(`No! ${moneyLeft}`);
  } else {
    console.log(`Yes! ${moneyLeft}`);
  }
};
cleverLily(["10", "170.00", "6"]);
