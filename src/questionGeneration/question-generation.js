import getExpressionQuestion from "./expressions/expressions";
import getLinearEquationQuestion from "./linearEquations/linearEquations";
import getLinearInequalitiesQuestion from "./linearInequalities/linearInequalities";

const questionsMap = {
  expressions: getExpressionQuestion,
  linearEquations: getLinearEquationQuestion,
  linearInequalities: getLinearInequalitiesQuestion,
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
