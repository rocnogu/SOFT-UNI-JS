salarys = (input) => {
  let moneyLeft = true;
  let index = 0;
  let tabs = Number(input[index]);
  // index = 0
  index++;
  // index = 1
  let money = Number(input[index]);
  // index = 1
  index++;
  // index = 2
  for (let i = 0; i < tabs; i++) {
    let currentTab = input[index];
    // index = 2
    index++;
    // index = 3++
    if (currentTab === "Facebook") {
      money -= 150;
    } else if (currentTab === "Instagram") {
      money -= 100;
    } else if (currentTab === "Reddit") {
      money -= 50;
    }

    if (money <= 0) {
      console.log(`You have lost your salary.`);
      moneyLeft = false;
      break;
    } else {
    }
  }
  if (moneyLeft) {
    console.log(money);
  }
};
salarys([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
