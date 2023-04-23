const getSystemsQuestion = () => {
  const xAnswer = Math.floor(Math.random() * 19) - 9;
  const yAnswer = Math.floor(Math.random() * 19) - 9;

  console.log(xAnswer);
  console.log(yAnswer);

  let isXLeft1 = Math.random() >= 0.5;
  const isYLeft1 = Math.random() >= 0.5;
  const isNumLeft1 = Math.random() >= 0.5;
  isXLeft1 =
    (isXLeft1 && isYLeft1 && isNumLeft1) ||
    (!isXLeft1 && !isYLeft1 && !isNumLeft1)
      ? !isXLeft1
      : isXLeft1;

  let isXLeft2 = Math.random() >= 0.5;
  const isYLeft2 = Math.random() >= 0.5;
  const isNumLeft2 = Math.random() >= 0.5;
  isXLeft2 =
    (isXLeft2 && isYLeft2 && isNumLeft2) ||
    (!isXLeft2 && !isYLeft2 && !isNumLeft2)
      ? !isXLeft2
      : isXLeft2;

  let x1Coefficient = Math.floor(Math.random() * 9) + 1;
  const y1Coefficient = Math.floor(Math.random() * 9) + 1;
  let num1 = 0;
  const x2Coefficient = Math.floor(Math.random() * 9) + 1;
  const y2Coefficient = Math.floor(Math.random() * 9) + 1;
  let num2 = 0;

  if (
    Math.abs(x1Coefficient / y1Coefficient) ===
    Math.abs(x2Coefficient / y2Coefficient)
  ) {
    x1Coefficient = x1Coefficient === 5 ? 6 : 5;
  }

  const isX1Positive = Math.random() >= 0.5;
  const isY1Positive = Math.random() >= 0.5;
  let isNum1Positive = true;
  const isX2Positive = Math.random() >= 0.5;
  const isY2Positive = Math.random() >= 0.5;
  let isNum2Positive = true;

  const mathX1 = isX1Positive ? x1Coefficient : x1Coefficient * -1;
  const mathY1 = isY1Positive ? y1Coefficient : y1Coefficient * -1;

  const mathX2 = isX2Positive ? x2Coefficient : x2Coefficient * -1;
  const mathY2 = isY2Positive ? y2Coefficient : y2Coefficient * -1;

  let equation1 = "";
  if (isXLeft1 && isYLeft1 && !isNumLeft1) {
    num1 = mathX1 * xAnswer + mathY1 * yAnswer;
    if (num1 < 0) {
      num1 *= -1;
      isNum1Positive = false;
    }
    equation1 = `${mathX1}x ${isY1Positive ? "+" : "-"} ${y1Coefficient}y = ${
      isNum1Positive ? num1 : num1 * -1
    }`;
  } else if (isXLeft1 && !isYLeft1 && isNumLeft1) {
    num1 = -mathX1 * xAnswer + mathY1 * yAnswer;
    if (num1 < 0) {
      num1 *= -1;
      isNum1Positive = false;
    }
    equation1 = `${mathX1}x ${isNum1Positive ? "+" : "-"} ${num1} = ${mathY1}y`;
  } else if (!isXLeft1 && isYLeft1 && isNumLeft1) {
    num1 = mathX1 * xAnswer + -mathY1 * yAnswer;
    if (num1 < 0) {
      num1 *= -1;
      isNum1Positive = false;
    }
    equation1 = `${isNum1Positive ? num1 : num1 * -1} ${
      isY1Positive ? "+" : "-"
    } ${y1Coefficient}y = ${mathX1}x`;
  } else if (isXLeft1 && !isYLeft1 && !isNumLeft1) {
    num1 = mathX1 * xAnswer + -mathY1 * yAnswer;
    if (num1 < 0) {
      num1 *= -1;
      isNum1Positive = false;
    }
    equation1 = `${mathX1}x = ${mathY1}y ${isNum1Positive ? "+" : "-"} ${num1}`;
  } else if (!isXLeft1 && isYLeft1 && !isNumLeft1) {
    num1 = -mathX1 * xAnswer + mathY1 * yAnswer;
    if (num1 < 0) {
      num1 *= -1;
      isNum1Positive = false;
    }
    equation1 = `${mathY1}y = ${mathX1}x ${isNum1Positive ? "+" : "-"} ${num1}`;
  } else if (!isXLeft1 && !isYLeft1 && isNumLeft1) {
    num1 = mathX1 * xAnswer + mathY1 * yAnswer;
    if (num1 < 0) {
      num1 *= -1;
      isNum1Positive = false;
    }
    equation1 = `${isNum1Positive ? num1 : num1 * -1} = ${mathX1}x ${
      isY1Positive ? "+" : "-"
    } ${y1Coefficient}y`;
  }

  let equation2 = "";
  if (isXLeft2 && isYLeft2 && !isNumLeft2) {
    num2 = mathX2 * xAnswer + mathY2 * yAnswer;
    if (num2 < 0) {
      num2 *= -1;
      isNum2Positive = false;
    }
    equation2 = `${mathX2}x ${isY2Positive ? "+" : "-"} ${y2Coefficient}y = ${
      isNum2Positive ? num2 : num2 * -1
    }`;
  } else if (isXLeft2 && !isYLeft2 && isNumLeft2) {
    num2 = -mathX2 * xAnswer + mathY2 * yAnswer;
    if (num2 < 0) {
      num2 *= -1;
      isNum2Positive = false;
    }
    equation2 = `${mathX2}x ${isNum2Positive ? "+" : "-"} ${num2} = ${mathY2}y`;
  } else if (!isXLeft2 && isYLeft2 && isNumLeft2) {
    num2 = mathX2 * xAnswer + -mathY2 * yAnswer;
    if (num2 < 0) {
      num2 *= -1;
      isNum2Positive = false;
    }
    equation2 = `${isNum2Positive ? num2 : num2 * -1} ${
      isY2Positive ? "+" : "-"
    } ${y2Coefficient}y = ${mathX2}x`;
  } else if (isXLeft2 && !isYLeft2 && !isNumLeft2) {
    num2 = mathX2 * xAnswer + -mathY2 * yAnswer;
    if (num2 < 0) {
      num2 *= -1;
      isNum2Positive = false;
    }
    equation2 = `${mathX2}x = ${mathY2}y ${isNum2Positive ? "+" : "-"} ${num2}`;
  } else if (!isXLeft2 && isYLeft2 && !isNumLeft2) {
    num2 = -mathX2 * xAnswer + mathY2 * yAnswer;
    if (num2 < 0) {
      num2 *= -1;
      isNum2Positive = false;
    }
    equation2 = `${mathY2}y = ${mathX2}x ${isNum2Positive ? "+" : "-"} ${num2}`;
  } else if (!isXLeft2 && !isYLeft2 && isNumLeft2) {
    num2 = mathX2 * xAnswer + mathY2 * yAnswer;
    if (num2 < 0) {
      num2 *= -1;
      isNum2Positive = false;
    }
    equation2 = `${isNum2Positive ? num2 : num2 * -1} = ${mathX2}x ${
      isY2Positive ? "+" : "-"
    } ${y2Coefficient}y`;
  }

  const expression = [
    "Solve the following system of equations",
    equation1,
    equation2,
  ];

  return {
    question: expression,
    answers: [
      { answer: xAnswer, answerLabel: "x = ", error: 0 },
      { answer: yAnswer, answerLabel: "y = ", error: 0 },
    ],
  };
};

export default getSystemsQuestion;
