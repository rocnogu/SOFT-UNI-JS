function StringChallenge(str) {
  //
  const arr = [
    { zero: 0 },
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
    { seven: 7 },
    { eight: 8 },
    { nine: 9 },
    { plus: `+` },
    { minus: `-` },
  ];
  //
  const output = arr.reduce((a, c) => {
    const [[k, v]] = Object.entries(c);
    return a.replace(new RegExp(k, "g"), v);
  }, str);
  //
  const numberOutput = eval(output);
  console.log(numberOutput);
  /////////////////////////////
  const arr2 = [
    { 0: "zero" },
    { 1: "one" },
    { 2: "two" },
    { 3: "three" },
    { 4: "four" },
    { 5: "five" },
    { 6: "six" },
    { 7: "seven" },
    { 8: "eight" },
    { 9: "nine" },
  ];

  // const output2 = arr2.reduce((a, c) => {
  //   const [[k, v]] = Object.entries(c);
  //   return a.replace(new RegExp(k, "g"), v);
  // }, numberOutput);

  console.log();
}
StringChallenge("onezeropluseight");
