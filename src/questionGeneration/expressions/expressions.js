const getExpressionQuestion = () => {
  const value = Math.floor(Math.random() * 9) + 1;
  const coefficient = Math.floor(Math.random() * 9) + 1;
  const xValue = Math.floor(Math.random() * 9) + 1;
  const isAddition = Math.random() >= 0.5;
  const isValueFirst = Math.random() >= 0.5;

  let answer;
  let expression;

  if (isAddition) {
    if (isValueFirst) {
      expression = [
        "Evaluate the expression",
        value + " + " + coefficient + "x",
        "when x = " + xValue,
      ];
      answer = value + coefficient * xValue;
    } else {
      expression = [
        "Evaluate the expression",
        coefficient + "x + " + value,
        "when x = " + xValue,
      ];
      answer = coefficient * xValue + value;
    }
  } else {
    if (isValueFirst) {
      expression = [
        "Evaluate the expression",
        value + " - " + coefficient + "x",
        "when x = " + xValue,
      ];
      answer = value - coefficient * xValue;
    } else {
      expression = [
        "Evaluate the expression",
        coefficient + "x - " + value,
        "when x = " + xValue,
      ];
      answer = coefficient * xValue - value;
    }
  }

  return { question: expression, answer };
};

export default getExpressionQuestion;
