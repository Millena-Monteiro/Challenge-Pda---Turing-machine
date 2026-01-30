/**
 *🤖 My Tabajara Turing Machine
 * Where arrays go in with questions and come out with answers
 */
function turingMachine(tape) {
  const results = [];

  // We go through the "tape" 3 symbols at a time,
  // because every operation needs a number, an operator, and another number
  for (let i = 0; i < tape.length; i += 3) {
    const num1 = tape[i];
    const operator = tape[i + 1];
    const num2 = tape[i + 2];

    if (num2 === undefined) break;

    let result;

    // This is where the logic happens:
    switch (operator) {
      case "+":
        result = num1 + num2; // Juntando as moedas
        break;
      case "-":
        result = num1 - num2; // Tirando uma lasquinha
        break;
      case "*":
        result = num1 * num2; // Multiplicando o pão 🙏🏽
        break;
      case "/":
        result = num1 / num2; // Dividindo
        break;
      case "%":
        result = num1 % num2; // O resto que sobrou
        break;
      default:
        result = "invalid operator";
    }
    results.push(result);
  }
  return results;
}

// --- THE MOMENT OF TRUTH ---
console.log("Simple test:", turingMachine([1, "+", 2])); // 1 + 2 = 3?
console.log(
  "Multiple operations together",
  turingMachine([1, "+", 2, 3, "*", 3])
); //the expected result: [3, 9]
console.log("Leftovers?", turingMachine([10, "/", 2, 10, "%", 3])); // Testing the remainder of the division
