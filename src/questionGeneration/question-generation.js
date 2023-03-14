import getExpressionQuestion from "./expressions/expressions";

const questionsMap = {
  expressions: getExpressionQuestion,
  linearEquations: () => {},
  linearInequalities: () => {},
  idGraphs: () => {},
  linearGraphs: () => {},
  systems: () => {},
  exponential: () => {},
  factorPolynomial: () => {},
  quadratic: () => {},
  probability: () => {},
  squareRoots: () => {},
  expressionReview: () => {},
};

const getRandomQuestion = ({ type }) => {
  return questionsMap[type]();
};

export default getRandomQuestion;
