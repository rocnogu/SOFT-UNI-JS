function fruitShop(input) {
  let plant = input[0];
  const day = input[1];
  const quantity = Number(input[2]);

  let bananaPrice = 0;
  let applePrice = 0;
  let orangePrice = 0;
  let grapefruitPrice = 0;
  let kiwiPrice = 0;
  let pineapplePrice = 0;
  let grapesPrice = 0;

  let plantPrice = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      grapesPrice = 3.85;
      bananaPrice = 2.5;
      applePrice = 1.2;
      orangePrice = 0.85;
      grapefruitPrice = 1.45;
      kiwiPrice = 2.7;
      pineapplePrice = 5.5;
      break;

    case "Saturday":
    case "Sunday":
      bananaPrice = 2.7;
      grapesPrice = 4.2;
      applePrice = 1.25;
      orangePrice = 0.9;
      grapefruitPrice = 1.6;
      kiwiPrice = 3;
      pineapplePrice = 5.6;
      break;

    default:
      console.log("error");
      return;
  }

  switch (plant) {
    case "banana":
      plantPrice = bananaPrice;
      break;
    case "apple":
      plantPrice = applePrice;
      break;
    case "orange":
      plantPrice = orangePrice;
      break;
    case "grapefruit":
      plantPrice = grapefruitPrice;
      break;
    case "kiwi":
      plantPrice = kiwiPrice;
      break;
    case "pineapple":
      plantPrice = pineapplePrice;
      break;
    case "grapes":
      plantPrice = grapesPrice;
      break;

    default:
      console.log("error");
      return;
  }
  const price = quantity * plantPrice;
  console.log(price.toFixed(2));
}

///////////////////

function fruitShop2(input) {
  let plant = input[0];
  const day = input[1];
  const quantity = Number(input[2]);

  let bananaPrice = 0;
  let applePrice = 0;
  let orangePrice = 0;
  let grapefruitPrice = 0;
  let kiwiPrice = 0;
  let pineapplePrice = 0;
  let grapesPrice = 0;

  let plantPrice = 0;
  //
  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    bananaPrice = 2.5;
    applePrice = 1.2;
    orangePrice = 0.85;
    grapefruitPrice = 1.45;
    kiwiPrice = 2.7;
    pineapplePrice = 5.5;
    grapesPrice = 3.85;
  } else if (day === "Saturday" || day === "Sunday") {
    bananaPrice = 2.7;
    applePrice = 1.25;
    orangePrice = 0.9;
    grapefruitPrice = 1.6;
    kiwiPrice = 3;
    pineapplePrice = 5.6;
    grapesPrice = 4.2;
  } else {
    console.log("error");
    return;
  }
  //
  if (plant == "banana") {
    plantPrice = bananaPrice;
  } else if (plant == "apple") {
    plantPrice = applePrice;
  } else if (plant == "orange") {
    plantPrice = orangePrice;
  } else if (plant == "grapefruit") {
    plantPrice = grapefruitPrice;
  } else if (plant == "kiwi") {
    plantPrice = kiwiPrice;
  } else if (plant == "pineapple") {
    plantPrice = pineapplePrice;
  } else if (plant == "grapes") {
    plantPrice = grapesPrice;
  } else {
    console.log("error");
    return;
  }
  //
  let price = quantity * plantPrice;
  if (price !== 0) {
    console.log(price.toFixed(2));
  }
}
