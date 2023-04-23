const getFactorPolynomialQuestion = () => {
  let a = Math.floor(Math.random() * 19) - 9;
  let b = Math.floor(Math.random() * 19) - 9;
  let c = Math.floor(Math.random() * 19) - 9;
  while (a === 0 || b === 0 || c === 0 || b * b - 4 * a * c <= 0) {
    a = Math.floor(Math.random() * 19) - 9;
    b = Math.floor(Math.random() * 19) - 9;
    c = Math.floor(Math.random() * 19) - 9;
  }

  let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

  if (x2 < x1) {
    let temp = x1;
    x1 = x2;
    x2 = temp;
  }

  const question = [
    "Find the factors of the following trinomial expression",
    <span>
      {`${a}x`}
      <sup>{`2`}</sup>
      {` ${b < 0 ? "-" : "+"} ${Math.abs(b)}x ${c < 0 ? "-" : "+"} ${Math.abs(
        c
      )}`}
    </span>,
    "Enter the lower factor in the first box and the higher factor in the second box",
    "Answer as a decimal and round your answer to the nearest 100ths place",
  ];

  return {
    question,
    answers: [
      { answer: x1, answerLabel: "lower factor = ", error: 0.01 },
      { answer: x2, answerLabel: "higher factor = ", error: 0.01 },
    ],
  };
};

export default getFactorPolynomialQuestion;
