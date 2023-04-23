import getExpressionQuestion from "./expressions/expressions";
import getLinearEquationQuestion from "./linearEquations/linearEquations";
import getLinearInequalitiesQuestion from "./linearInequalities/linearInequalities";
import getSequencesQuestion from "./sequences/sequences";
import getLinearGraphsQuestion from "./linearGraphs/linearGraphs";
import getSystemsQuestion from "./systems/systems";
import getExponentialQuestion from "./exponential/exponential";
import getFactorPolynomialQuestion from "./factorPolynomial/factorPolynomial";
import getQuadraticQuestion from "./quadratic/quadratic";
import getProbabilityQuestion from "./probability/probability";
import getSquareRootQuestion from "./squareRoots/squareRoots";
import getExpressionReviewQuestion from "./expressionReview/expressionReview";

const questionsMap = {
  expressions: getExpressionQuestion,
  linearEquations: getLinearEquationQuestion,
  linearInequalities: getLinearInequalitiesQuestion,
  sequences: getSequencesQuestion,
  linearGraphs: getLinearGraphsQuestion,
  systems: getSystemsQuestion,
  exponential: getExponentialQuestion,
  factorPolynomial: getFactorPolynomialQuestion,
  quadratic: getQuadraticQuestion,
  probability: getProbabilityQuestion,
  squareRoots: getSquareRootQuestion,
  expressionReview: getExpressionReviewQuestion,
};

const getRandomQuestion = ({ type }) => {
  return questionsMap[type]();
};

export default getRandomQuestion;
