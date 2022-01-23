function personalTitles(input) {
  const age = Number(input[0]);
  const gender = input[1];

  if (age >= 16) {
    if (gender === "m") {
      console.log("Mr.");
    } else {
      console.log("Ms.");
    }
  } else {
    if (gender === "m") {
      console.log("Master");
    } else {
      console.log("Miss");
    }
  }
}

////////////////////////////////////////////////////////////////

function personalTitles(input) {
  const age = Number(input[0]);
  const gender = input[1];

  if (age >= 16) {
    switch (gender) {
      case "m":
        console.log("Mr.");
        break;
      case "f":
        console.log("Ms.");
        break;
      default:
        console.log("unknown");
        break;
    }
  } else {
    switch (gender) {
      case "m":
        console.log("Master");
        break;
      case "f":
        console.log("Miss");
        break;
      default:
        console.log("unknown");
        break;
    }
  }
}
