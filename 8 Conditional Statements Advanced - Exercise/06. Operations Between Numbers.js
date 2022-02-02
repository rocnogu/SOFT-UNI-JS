function operationsBetweenNumbers(input) {
  //   Вход
  // •	N1 – цяло число в интервала [0...40 000]
  const N1 = Number(input[0]);
  // •	N2 – цяло число в интервала [0...40 000]
  const N2 = Number(input[1]);
  // •	Оператор – един символ измежду: "+", "-", "*", "/", "%"
  let operator = input[2];
  //
  let result = 0;
  //
  let evenOdd = "";
  function ifModDivIsZero() {
    if (result % 2 == 0) {
      evenOdd = "even";
    } else {
      evenOdd = "odd";
    }
  }
  //
  switch (operator) {
    // •	Ако операцията е събиране, изваждане или умножение:
    case "+":
      result = N1 + N2;
      ifModDivIsZero();
      console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`);
      break;
    case "-":
      result = N1 - N2;
      ifModDivIsZero();
      console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`);
      break;
    case "*":
      result = N1 * N2;
      ifModDivIsZero();
      console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`);
      break;

    // •	Ако операцията е деление: резултатът е форматиран до вторият знак след дес.запетая
    case "/":
      result = N1 / N2;
      ifModDivIsZero();
      // •	В случай на деление с 0(нула):
      if (N1 == 0) {
        console.log(`Cannot divide ${N2} by zero`);
      } else if (N2 == 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
      }
      break;

    // •	Ако операцията е модулно деление:
    case "%":
      result = N1 % N2;
      ifModDivIsZero();
      // •	В случай на деление с 0(нула):
      if (N1 == 0) {
        console.log(`Cannot divide ${N2} by zero`);
      } else if (N2 == 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        console.log(`${N1} ${operator} ${N2} = ${result}`);
      }
      break;
  }
  //
}
