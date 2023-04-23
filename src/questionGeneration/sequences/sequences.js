const getSequencesQuestion = () => {
  const startValue = Math.floor(Math.random() * 201) - 100;
  let differenceValue = Math.floor(Math.random() * 41) - 20;
  differenceValue = differenceValue === 0 ? 6 : differenceValue;
  const numIterations = Math.floor(Math.random() * 200) + 10;

  let suffix = "th";
  if (numIterations % 10 === 1) {
    suffix = "st";
  } else if (numIterations % 10 === 2) {
    suffix = "nd";
  } else if (numIterations % 10 === 3) {
    suffix = "rd";
  }

  const question = [
    `Find the ${numIterations}${suffix} term in the following arithmetic sequence`,
    `${startValue}, ${startValue + differenceValue}, ${
      startValue + 2 * differenceValue
    }, ${startValue + 3 * differenceValue}, ...`,
  ];

  const answer = startValue + (numIterations - 1) * differenceValue;

  return {
    question,
    answers: [
      {
        answer,
        answerLabel: `Value of ${numIterations}${suffix} term`,
        error: 0,
      },
    ],
  };
};

export default getSequencesQuestion;
