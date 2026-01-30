function turingMachine(tape) {
  const results = [];

  for (let i = 0; i < tape.length; i += 3) {
    const num1 = tape[i];
    const operator = tape[i + 1];
    const num2 = tape[i + 2];

    let result;

    switch (operator) {
      case "+":
        result = mum1 + num2;
      case "-":
        result = num1 - num2;
      case "*":
        result = num1 * num2;
      case "/":
        result = num1 / num2;
      case "%":
        result = num1 % num2;
      default:
        result = "invalid operator";
    }
    results.push(result);
  }
  return results;
}
