const getSquareRootQuestion = () => {
  let coefficient = Math.floor(Math.random() * 19) - 9;
  coefficient = coefficient === 0 ? 1 : coefficient;
  const sqrVal = Math.floor(Math.random() * 19) - 9;
  let leftVal = Math.floor(Math.random() * 19) - 9;
  let rightVal = Math.floor(Math.random() * 19) - 9;

  while (rightVal - leftVal < 0) {
    leftVal = Math.floor(Math.random() * 19) - 9;
    rightVal = Math.floor(Math.random() * 19) - 9;
  }

  const answer =
    ((rightVal - leftVal) * (rightVal - leftVal) - sqrVal) / coefficient;

  const question = [
    "Find the value of x in the following equation",
    <span>
      <math>
        <msqrt>
          <mn style={{ fontFamily: "Arial, sans-serif" }}>{`${coefficient}x ${
            sqrVal < 0 ? "-" : "+"
          } ${Math.abs(sqrVal)}`}</mn>
        </msqrt>
      </math>
      {`${leftVal < 0 ? " -" : " +"} ${Math.abs(leftVal)} = ${rightVal}`}
    </span>,
    "Answer as a decimal and round your answer to the nearest 100ths place",
  ];

  return {
    question,
    answers: [{ answer, answerLabel: "x = ", error: 0.01 }],
  };
};

export default getSquareRootQuestion;
