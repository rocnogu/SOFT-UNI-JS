function newHouse(input) {
  const flowersType = input[0];
  const flowersNumber = Number(input[1]);
  const budget = Number(input[2]);

  let rose = 5;
  let dalia = 3.8;
  let lale = 2.8;
  let narcis = 3;
  let gladiolus = 2.5;

  let flowersPrice = 0;

  switch (flowersType) {
    case "Roses":
      flowersPrice = rose;
      // •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
      if (flowersNumber > 80) {
        flowersPrice = flowersPrice * 0.9;
      }
      break;
    case "Dahlias":
      flowersPrice = dalia;
      // •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
      if (flowersNumber > 90) {
        flowersPrice = flowersPrice * 0.85;
      }
      break;
    case "Tulips":
      flowersPrice = lale;
      // •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
      if (flowersNumber > 80) {
        flowersPrice = flowersPrice * 0.85;
      }
      break;
    case "Narcissus":
      flowersPrice = narcis;
      // •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
      if (flowersNumber < 120) {
        flowersPrice = flowersPrice * 1.15;
      }
      break;
    case "Gladiolus":
      flowersPrice = gladiolus;
      // •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
      if (flowersNumber < 80) {
        flowersPrice = flowersPrice * 1.2;
      }
      break;
  }

  let money = flowersPrice * flowersNumber;
  let moneyLeft = budget - money;
  let moneyNeeded = Math.abs(moneyLeft);

  if (budget >= money) {
    console.log(
      `Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}
