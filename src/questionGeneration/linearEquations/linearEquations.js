const getLinearEquationQuestion = () => {
  const leftCoefficient = Math.floor(Math.random() * 9) + 1;
  let rightCoefficient = Math.floor(Math.random() * 9) + 1;
  const isLeftCoefficientPositive = Math.random() >= 0.5;
  const isRightCoefficientPositive = Math.random() >= 0.5;
  if (
    isRightCoefficientPositive === isLeftCoefficientPositive &&
    leftCoefficient === rightCoefficient
  ) {
    rightCoefficient++;
  }

  const leftValue = Math.floor(Math.random() * 9) + 1;
  const rightValue = Math.floor(Math.random() * 9) + 1;
  const isLeftValuePositive = Math.random() >= 0.5;
  const isRightValuePositive = Math.random() >= 0.5;

  const isLeftValueFirst = Math.random() >= 0.5;
  const isRightValueFirst = Math.random() >= 0.5;

  const mathRightCoefficient = isRightCoefficientPositive
    ? rightCoefficient
    : rightCoefficient * -1;
  const mathLeftCoefficient = isLeftCoefficientPositive
    ? leftCoefficient
    : leftCoefficient * -1;

  const mathRightValue = isRightValuePositive ? rightValue : rightValue * -1;
  const mathLeftValue = isLeftValuePositive ? leftValue : leftValue * -1;

  const combinedCoefficient = mathLeftCoefficient - mathRightCoefficient;
  const combinedValue = mathRightValue - mathLeftValue;
  const answer = combinedValue / combinedCoefficient;
  let equation;
  let expression = ["Find the value of x in the following equation"];
  if (isLeftValueFirst) {
    if (isLeftCoefficientPositive) {
      equation = `${mathLeftValue} + ${leftCoefficient}x = `;
    } else {
      equation = `${mathLeftValue} - ${leftCoefficient}x = `;
    }
  } else {
    if (isLeftValuePositive) {
      equation = `${mathLeftCoefficient}x + ${leftValue} = `;
    } else {
      equation = `${mathLeftCoefficient}x - ${leftValue} = `;
    }
  }

  if (isRightValueFirst) {
    if (isRightCoefficientPositive) {
      equation += `${mathRightValue} + ${rightCoefficient}x`;
    } else {
      equation += `${mathRightValue} - ${rightCoefficient}x`;
    }
  } else {
    if (isRightValuePositive) {
      equation += `${mathRightCoefficient}x + ${rightValue}`;
    } else {
      equation += `${mathRightCoefficient}x - ${rightValue}`;
    }
  }
  expression.push(equation);
  expression.push(
    "Answer as a decimal and round your answer to the nearest 100ths place"
  );

  return {
    question: expression,
    answers: [{ answer, answerLabel: "x = ", error: 0.01 }],
  };
};

export default getLinearEquationQuestion;
