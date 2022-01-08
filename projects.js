function projects2(input) {
  let firstName = input[0];
  let projectsNumber = input[1];
  let projectsHours = projectsNumber * 3;

  console.log(
    `The architect ${firstName} will need ${projectsHours} hours to complete ${projectsNumber} project/s.`
  );
}
