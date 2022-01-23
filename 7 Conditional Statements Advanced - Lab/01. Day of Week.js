function weekDay(input) {
  const day = Number(input[0]);

  switch (day) {
    case 7:
      console.log("Sunday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 1:
      console.log("Monday");
      break;
    default:
      console.log("Error");
      break;
  }
}
