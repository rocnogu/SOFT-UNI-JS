function hotelRoom(input) {
  // Вход
  const month = input[0];
  const nights = Number(input[1]);
  //
  let apartmentPrice = 0;
  let studioPrice = 0;
  //
  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      apartmentPrice = 65;
      if (nights > 7 && nights <= 14) {
        studioPrice *= 0.95;
      } else if (nights > 14) {
        studioPrice *= 0.7;
      } else {
        console.log(`Error: nights`);
      }
      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      if (nights > 14) {
        studioPrice *= 0.8;
      }
      break;

    case "July":
    case "August":
      studioPrice = 76;
      apartmentPrice = 77;
      break;
  }
  if (nights > 14) {
    apartmentPrice *= 0.9;
  }
  //
  let apartmentFinalPrice = apartmentPrice * nights;
  let studioFinalPrice = studioPrice * nights;
  //
  console.log(`Apartment: ${apartmentFinalPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioFinalPrice.toFixed(2)} lv.`);
  //
}
hotelRoom(["August", "20"]);

function hotelRoom2(input) {
  // Вход
  const month = input[0];
  const nights = Number(input[1]);
  //
  let apartmentPrice = 0;
  let studioPrice = 0;
  //
  if (month == "May" || month == "October") {
    apartmentPrice = 65;
    studioPrice = 50;
    if (nights > 7 && nights <= 14) {
      studioPrice *= 0.95;
    } else if (nights > 14) {
      studioPrice *= 0.7;
    } else {
      console.log(`Error: nights`);
    }
  } else if (month === "June" || month == "September") {
    studioPrice = 75.2;
    apartmentPrice = 68.7;
    if (nights > 14) {
      studioPrice *= 0.8;
    }
  } else if (month === "July" || month == "August") {
    studioPrice = 76;
    apartmentPrice = 77;
  } else {
    console.log(`Error: month`);
  }
  if (nights > 14) {
    apartmentPrice *= 0.9;
  }
  //
  let apartmentFinalPrice = apartmentPrice * nights;
  let studioFinalPrice = studioPrice * nights;
  //
  console.log(`Apartment: ${apartmentFinalPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioFinalPrice.toFixed(2)} lv.`);
  //
}
hotelRoom2(["sfdg", "0"]);
