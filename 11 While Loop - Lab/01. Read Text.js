function readText(input) {
  let index = 0;
  let txt = input[index];
  index++;

  while (txt != "Stop") {
    console.log(txt);
    txt = input[index];
    index++;
  }
}
readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);

// short index iteration
//
// function readText(input) {
//   let index = 0;
//   let txt = input[index++];
//   while (txt != "Stop") {
//     console.log(txt);
//     txt = input[index++];
//   }
// }

// while-if-brake circle
//
// readText2 = () => {
// while (true) {
//   let txt = input[index];
//   index++;
//   if (txt === "Stop") {
//     break;
//   }
//   console.log(txt);
// }
// };

// for-while circle
//
// readText3 = function () {
//   for (let i = 1; i <= 10; i++) {
//     console.log("for cicle");
//   }
// };
