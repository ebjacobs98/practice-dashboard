const getExpressionReviewQuestion = () => {
  let bottomNum = Math.floor(Math.random() * 19) - 9;
  bottomNum = bottomNum === 0 ? 1 : bottomNum;
  let topNum = Math.floor(Math.random() * 19) - 9;
  topNum = topNum === 0 ? 1 : topNum;
  let topMultiplier = Math.floor(Math.random() * 19) - 9;
  topMultiplier =
    topMultiplier === 0 || topMultiplier === 1 ? 2 : topMultiplier;

  const b = (bottomNum + topNum) * topMultiplier;
  const c = topNum * bottomNum * topMultiplier;

  const question = [
    "Simplify the following expression to the format of a(x + b)",
    <>
      <span>
        {`${topMultiplier}x`}
        <sup>{`2`}</sup>
        {` ${b < 0 ? "-" : "+"} ${Math.abs(b)} ${c < 0 ? "-" : "+"} ${Math.abs(
          c
        )}`}
      </span>
      <div
        style={{
          height: "2px",
          backgroundColor: "black",
          width: "30%",
          marginLeft: "35%",
        }}
      ></div>
      <span>{`x ${bottomNum < 0 ? "-" : "+"} ${Math.abs(bottomNum)}`}</span>
    </>,
    "what are the values of a and b?",
  ];

  return {
    question,
    answers: [
      { answer: topMultiplier, answerLabel: "a = ", error: 0 },
      { answer: topNum, answerLabel: "b = ", error: 0 },
    ],
  };
};

export default getExpressionReviewQuestion;
