const getExponentialQuestion = () => {
  const topX = Math.floor(Math.random() * 19) - 9;
  const topXParen = Math.floor(Math.random() * 19) - 9;
  const bottomX = Math.floor(Math.random() * 19) - 9;

  const topY = Math.floor(Math.random() * 19) - 9;
  const bottomY = Math.floor(Math.random() * 19) - 9;
  const bottomYParen = Math.floor(Math.random() * 19) - 9;

  const topZ1 = Math.floor(Math.random() * 19) - 9;
  const topZ2 = Math.floor(Math.random() * 19) - 9;
  const bottomZ = Math.floor(Math.random() * 19) - 9;

  const xAnswer = topX * topXParen - bottomX;
  const yAnswer = topY - bottomY * bottomYParen;
  const zAnswer = topZ1 + topZ2 - bottomZ;

  const question = [
    "Simplify the following exponential expression",
    <>
      <span>
        {`(x`}
        <sup>{topX}</sup>
        {`)`}
        <sup>
          <sup>{topXParen}</sup>
        </sup>
        {` * y`}
        <sup>{topY}</sup>
        {` * z`}
        <sup>{topZ1}</sup>
        {` * z`}
        <sup>{topZ2}</sup>
      </span>
      <div
        style={{
          height: "2px",
          backgroundColor: "black",
          width: "50%",
          marginLeft: "25%",
        }}
      ></div>
      <span>
        {`x`}
        <sup>{bottomX}</sup>
        {` * (y`}
        <sup>{bottomY}</sup>
        {`)`}
        <sup>
          <sup>{bottomYParen}</sup>
        </sup>
        {` * z`}
        <sup>{bottomZ}</sup>
      </span>
    </>,
    "Fill in the blanks for the missing exponents",
    <span>
      {`x`}
      <sup>{`?`}</sup>
      {` y`}
      <sup>{`?`}</sup>
      {` z`}
      <sup>{`?`}</sup>
    </span>,
  ];

  return {
    question,
    answers: [
      { answer: xAnswer, answerLabel: "x exponent = ", error: 0 },
      { answer: yAnswer, answerLabel: "y exponent = ", error: 0 },
      { answer: zAnswer, answerLabel: "z exponent = ", error: 0 },
    ],
  };
};

export default getExponentialQuestion;
