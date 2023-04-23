const getQuadraticQuestion = () => {
  const x1 = Math.floor(Math.random() * 19) - 9;
  const x2 = Math.floor(Math.random() * 19) - 9;
  const val1 = Math.floor(Math.random() * 19) - 9;
  const val2 = Math.floor(Math.random() * 19) - 9;

  const a = x1 * x2;
  const b = x1 * val2 + x2 * val1;
  const c = val1 * val2;

  const question = [
    "Multiply the following binomial expression using the FOIL method",
    `(${x1}x ${val1 < 0 ? "-" : "+"} ${Math.abs(val1)})(${x2}x ${
      val2 < 0 ? "-" : "+"
    } ${Math.abs(val2)})`,
    "what are the values of the coefficients a, b, and c?",
    <span>
      {`ax`}
      <sup>{`2`}</sup>
      {` + bx + c`}
    </span>,
  ];

  return {
    question,
    answers: [
      { answer: a, answerLabel: "a = ", error: 0 },
      { answer: b, answerLabel: "b = ", error: 0 },
      { answer: c, answerLabel: "c = ", error: 0 },
    ],
  };
};

export default getQuadraticQuestion;
