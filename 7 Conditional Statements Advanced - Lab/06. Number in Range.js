function numberRange(input) {
  const numberInt = Number(input[0]);

  if (numberInt >= -100 && numberInt <= 100 && numberInt !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
