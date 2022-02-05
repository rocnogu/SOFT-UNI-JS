graduation = (input) => {
  let index = 0;
  let name = input[index++];

  let counter = 0;
  let sumGrade = 0;

  let excluded = false;
  let clas = 1;
  while (clas <= 12) {
    let grades = Number(input[index++]);
    if (grades < 4.0) {
      counter++;
      if (counter > 1) {
        excluded = true;
        console.log(`${name} has been excluded at ${clas} grade`);
        break;
      }
      continue;
    }
    sumGrade += grades;
    clas++;
  }
  if (!excluded) {
    let averageGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
  }
};
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
