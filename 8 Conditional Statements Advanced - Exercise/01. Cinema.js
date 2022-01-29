function cinema(input) {
  const projectionType = input[0];
  const cinemaRows = Number(input[1]);
  const cinemaColons = Number(input[2]);

  const premierePrice = 12;
  const normalPrice = 7.5;
  const discountPrice = 5;

  let ticketPrice = cinemaRows * cinemaColons;

  switch (projectionType) {
    case "Premiere":
      ticketPrice *= premierePrice;
      //  *=
      //  ticketPrice = ticketPrice * premierePrice;
      //  ticketPrice = cinemaRows * cinemaColons * premierePrice;
      break;
    case "Normal":
      ticketPrice *= normalPrice;
      break;
    case "Discount":
      ticketPrice *= discountPrice;
      break;
  }

  console.log(ticketPrice.toFixed(2));
}
cinema2(["Premiere", "10", "12"]);

function cinema2(input) {
  const projectionType = input[0];
  const cinemaRows = Number(input[1]);
  const cinemaColons = Number(input[2]);
  const places = cinemaRows * cinemaColons;

  const premierePrice = 12;
  const normalPrice = 7.5;
  const discountPrice = 5;
  let ticketPrice = 0;

  if (projectionType == "Premiere") {
    ticketPrice = premierePrice;
  } else if (projectionType == "Normal") {
    ticketPrice = normalPrice;
  } else if (projectionType == "Discount") {
    ticketPrice = discountPrice;
  } else {
    console.log("Invalid");
  }

  const income = places * ticketPrice;
  console.log(income.toFixed(2));
}
