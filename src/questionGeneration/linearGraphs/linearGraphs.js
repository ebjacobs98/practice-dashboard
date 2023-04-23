import QuestionGraph from "./questionGraph";

const getLinearGraphsQuestion = () => {
  const yInt = Math.floor(Math.random() * 21) - 10;

  const isSlopeHalf = Math.random() >= 0.5;

  let slope = Math.floor(Math.random() * 11) - 5;
  slope = isSlopeHalf ? slope + 0.5 : slope;

  const question = [
    `Find the slope and y-intercept of the following linear graph`,
    <QuestionGraph slope={slope} yInt={yInt} />,
    "Answer as a decimal and round your answers to the nearest 10ths place",
  ];

  return {
    question,
    answers: [
      {
        answer: slope,
        answerLabel: `Slope = `,
        error: 0,
      },
      {
        answer: yInt,
        answerLabel: `Y Intercept = `,
        error: 0,
      },
    ],
  };
};

export default getLinearGraphsQuestion;
