function workingHours(input) {
  const hour = Number(input[0]);
  const day = input[1];

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Friday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Saturday"
  ) {
    if (hour >= 10 && hour <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  } else {
    console.log("closed");
  }
}

// switch

function workingHours(input) {
  const hour = Number(input[0]);
  const day = input[1];

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
    case "Saturday":
      switch (hour) {
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          console.log("open");
          break;
        default:
          console.log("closed");
          break;
      }
      break;
    default:
      console.log("closed");
      break;
  }
}
