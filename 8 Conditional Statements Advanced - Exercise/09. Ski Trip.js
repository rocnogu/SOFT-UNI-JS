function skiTrip(input) {
  let dayOfStay = Number(input[0]);
  let typeRoom = input[1];
  let rating = input[2];
  //
  let priceRoom = 0;
  //
  switch (typeRoom) {
    case "room for one person":
      priceRoom = 18;
      break;
    case "apartment":
      priceRoom = 25;
      if (dayOfStay < 10) {
        priceRoom *= 0.7;
      } else if (dayOfStay >= 10 && dayOfStay <= 15) {
        priceRoom *= 0.65;
      } else {
        priceRoom *= 0.5;
      }
      break;
    case "president apartment":
      priceRoom = 35;
      if (dayOfStay < 10) {
        priceRoom *= 0.9;
      } else if (dayOfStay >= 10 && dayOfStay <= 15) {
        priceRoom *= 0.85;
      } else {
        priceRoom *= 0.8;
      }
      break;
  }
  //
  if (rating == "positive") {
    priceRoom *= 1.25;
  } else {
    priceRoom *= 0.9;
  }
  // Изход
  let price = (dayOfStay - 1) * priceRoom;
  console.log(price.toFixed(2));
  //
}
skiTrip(["2", "apartment", "positive"]);
