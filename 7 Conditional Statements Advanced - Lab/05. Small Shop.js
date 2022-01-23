function smallShop(input) {
  const product = input[0];
  const city = input[1];
  const quntity = Number(input[2]);
  let price = 0;

  switch (city) {
    case "Sofia":
      switch (product) {
        case "coffee":
          price = quntity * 0.5;
          break;
        case "water":
          price = quntity * 0.8;
          break;
        case "beer":
          price = quntity * 1.2;
          break;
        case "sweets":
          price = quntity * 1.45;
          break;
        case "peanuts":
          price = quntity * 1.6;
          break;
      }
      break;

    case "Plovdiv":
      switch (product) {
        case "coffee":
          price = quntity * 0.4;
          break;
        case "water":
          price = quntity * 0.7;
          break;
        case "beer":
          price = quntity * 1.15;
          break;
        case "sweets":
          price = quntity * 1.3;
          break;
        case "peanuts":
          price = quntity * 1.5;
          break;
      }
      break;

    case "Varna":
      switch (product) {
        case "coffee":
          price = quntity * 0.45;
          break;
        case "water":
          price = quntity * 0.7;
          break;
        case "beer":
          price = quntity * 1.1;
          break;
        case "sweets":
          price = quntity * 1.35;
          break;
        case "peanuts":
          price = quntity * 1.55;
          break;
      }
      break;
  }
  console.log(price);
}

////////////////////////////////////////////////////////////////

function smallShop(input) {
  const product = input[0];
  const city = input[1];
  const quntity = Number(input[2]);
  let price = 0;

  if (city == "Sofia") {
    if (product == "coffee") {
      price = quntity * 0.5;
    } else if (product == "water") {
      price = quntity * 0.8;
    } else if (product == "beer") {
      price = quntity * 1.2;
    } else if (product == "sweets") {
      price = quntity * 1.45;
    } else if (product == "peanuts") {
      price = quntity * 1.6;
    }
  }
  if (city == "Plovdiv") {
    if (product == "coffee") {
      price = quntity * 0.4;
    } else if (product == "water") {
      price = quntity * 0.7;
    } else if (product == "beer") {
      price = quntity * 1.15;
    } else if (product == "sweets") {
      price = quntity * 1.3;
    } else if (product == "peanuts") {
      price = quntity * 1.5;
    }
  }
  if (city == "Varna") {
    if (product == "coffee") {
      price = quntity * 0.45;
    } else if (product == "water") {
      price = quntity * 0.7;
    } else if (product == "beer") {
      price = quntity * 1.1;
    } else if (product == "sweets") {
      price = quntity * 1.35;
    } else if (product == "peanuts") {
      price = quntity * 1.55;
    }
  }

  console.log(price);
}
