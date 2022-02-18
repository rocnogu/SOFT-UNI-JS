histogram = (input) => {
  let n = Number(input[0]);

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= n; i++) {
    let num = Number(input[i]);
    if (num < 200) {
      p1++;
    } else if (num >= 200 && num <= 399) {
      p2++;
    } else if (num >= 400 && num <= 599) {
      p3++;
    } else if (num >= 600 && num <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  let p1pr = (p1 / n) * 100;
  let p2pr = (p2 / n) * 100;
  let p3pr = (p3 / n) * 100;
  let p4pr = (p4 / n) * 100;
  let p5pr = (p5 / n) * 100;

  console.log(`${p1pr.toFixed(2)}%`);
  console.log(`${p2pr.toFixed(2)}%`);
  console.log(`${p3pr.toFixed(2)}%`);
  console.log(`${p4pr.toFixed(2)}%`);
  console.log(`${p5pr.toFixed(2)}%`);
};
histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);
