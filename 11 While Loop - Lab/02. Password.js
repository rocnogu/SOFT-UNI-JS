// password = (input) => {
//   let index = 0;
//   let name = input[index++];
//   let pass = input[index++];
//   let tempPass = input[index++];
//   while (pass !== tempPass) {
//     tempPass = input[index++];
//   }
//   console.log(`Welcome ${name}!`);
// };

password = (input) => {
  let index = 0;
  let name = input[index++];
  let pass = input[index++];
  while (true) {
    tempPass = input[index++];
    if (pass === tempPass) {
      break;
    }
  }
  console.log(`Welcome ${name}!`);
};
