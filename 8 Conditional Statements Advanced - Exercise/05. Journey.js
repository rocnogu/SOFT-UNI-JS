function journey(input) {
  //   Вход
  // 	Първи– Бюджет, реално число в интервала [10.00...5000.00].
  const budget = Number(input[0]);
  // 	Втори–  Един от двата възможни сезона: "summer" или "winter"
  const season = input[1];

  // destination измежду "Bulgaria", "Balkans" и "Europe"
  let destination = "";
  // 	typeVacation Почивката може да е между "Camp" , "Hotel"
  let typeVacation = "";
  //
  let moneySpend = 0;
  //

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season == "summer") {
      moneySpend = budget * 0.3;
    } else if (season == "winter") {
      moneySpend = budget * 0.7;
    } else {
      console.log(`Error: No such season 1`);
    }
  } else if (budget > 100 && budget <= 1000) {
    destination = "Balkans";
    if (season == "summer") {
      moneySpend = budget * 0.4;
    } else if (season == "winter") {
      moneySpend = budget * 0.8;
    } else {
      console.log(`Error: No such season 2`);
    }
  } else {
    destination = "Europe";
    moneySpend = budget * 0.9;
  }

  switch (season) {
    case "summer":
      typeVacation = "Camp";
      if (destination == "Europe") {
        typeVacation = "Hotel";
      }
      break;
    case "winter":
      typeVacation = "Hotel";
      break;
  }

  //

  //   Изход
  console.log(`Somewhere in ${destination}`);
  console.log(`${typeVacation} - ${moneySpend.toFixed(2)}`);
}
