function turingMachine(tape) {
  const results = [];

  for (let i = 0; i < tape.length; i += 3) {
    const num1 = tape[i];
    const operator = tape[i + 1];
    const num2 = tape[i + 2];

    if (num2 === undefined) break;

    let result;

    switch (operator) {
      case "+":
        result = mum1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        result = "invalid operator";
    }
    results.push(result);
  }
  return results;
}

console.log(turingMachine([1, "+", 2]));
console.log(turingMachine([1, "+", 2, 3, "*", 3]));
console.log(turingMachine([10, "/", 2, 10, "%", 3]));
