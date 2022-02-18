clock = () => {
  for (h = 0; h < 24; h++) {
    for (m = 0; m < 60; m++) {
      console.log(`${h}:${m}`);
    }
  }
};
clock();

// clock = () => {
//     for (h = 0; h < 24; h++) {
//       for (m = 0; m < 60; m++) {
//         if (m < 10) {
//           console.log(`${h}:0${m}`);
//         } else {
//           console.log(`${h}:${m}`);
//         }
//       }
//     }
//   };
