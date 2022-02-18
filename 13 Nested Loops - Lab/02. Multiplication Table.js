multiplicationTable = () => {
  for (h = 1; h < 11; h++) {
    for (m = 1; m < 11; m++) {
      let result = h * m;
      console.log(`${h} * ${m} = ${result}`);
    }
  }
};
multiplicationTable();

multiplicationTable = () => {
  for (h = 1; h < 11; h++) {
    for (m = 1; m < 11; m++) {
      console.log(`${h} * ${m} = ${h * m}`);
    }
  }
};
multiplicationTable();
