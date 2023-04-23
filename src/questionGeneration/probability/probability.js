const getProbabilityQuestion = () => {
  const colors = ["red", "blue", "green"];

  let numRed = Math.floor(Math.random() * 20);
  const numBlue = Math.floor(Math.random() * 20);
  const numGreen = Math.floor(Math.random() * 20);

  let totalMarbles = numRed + numBlue + numGreen;
  if (totalMarbles < 2) {
    totalMarbles += 2;
    numRed += 2;
  }
  const numColors = [numRed, numBlue, numGreen];

  const marble1 = Math.floor(Math.random() * 3);
  const marble2 = Math.floor(Math.random() * 3);

  const prob =
    marble1 === marble2
      ? 2 *
        ((numColors[marble1] / totalMarbles) *
          ((numColors[marble2] - 1) / (totalMarbles - 1)))
      : 2 *
        ((numColors[marble1] / totalMarbles) *
          (numColors[marble2] / (totalMarbles - 1)));

  const question = [
    `A hat has ${numRed} red marbles, ${numBlue} blue marbles, and ${numGreen} green marbles`,
    `If 2 marbles are selected randomly without replacement,`,
    marble1 === marble2
      ? `what are the odds of picking 2 ${colors[marble1]} marbles`
      : `what are the odds of picking 1 ${colors[marble1]} marble and 1 ${colors[marble2]} marble`,
    "Answer as a percentage and round your answer to the nearest 100ths place",
  ];

  return {
    question,
    answers: [
      { answer: prob * 100, answerLabel: "probability = ", error: 0.01 },
    ],
  };
};

export default getProbabilityQuestion;
