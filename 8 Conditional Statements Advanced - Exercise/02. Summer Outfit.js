function summerOutfit(input) {
  const degrees = Number(input[0]);
  let timeOfDay = input[1];
  let outfit = "";
  let shoes = "";

  if (timeOfDay == "Morning") {
    if (degrees <= 18) {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else {
      outfit = "T-Shirt";
      shoes = "Sandals";
    }
  } else if (timeOfDay == "Afternoon") {
    if (degrees <= 18) {
      outfit = "Shirt";
      shoes = "Moccasins";
    } else if (degrees > 18 && degrees <= 24) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (degrees >= 25) {
      outfit = "Swim Suit";
      shoes = "Barefoot";
    }
  } else {
    outfit = "Shirt";
    shoes = "Moccasins";
  }

  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

////////////////////////////////

function summerOutfit2(input) {
  const degrees = Number(input[0]);
  let timeOfDay = input[1];
  let outfit = "";
  let shoes = "";

  switch (timeOfDay) {
    case "Morning":
      if (degrees <= 18) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;
    case "Afternoon":
      if (degrees <= 18) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (degrees > 18 && degrees <= 24) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (degrees >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;
    default:
      outfit = "Shirt";
      shoes = "Moccasins";
      break;
  }

  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
