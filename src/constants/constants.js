export const TopicsMap = {
  EXPRESSIONS: "expressions",
  LINEAR_EQUATIONS: "linearEquations",
  LINEAR_INEQUALITIES: "linearInequalities",
  ID_GRAPHS: "idGraphs",
  LINEAR_GRAPHS: "linearGraphs",
  SYSTEMS: "systems",
  EXPONENTIAL: "exponential",
  FACTOR_POLYNOMIAL: "factorPolynomial",
  QUADRATIC: "quadratic",
  PROBABILITY: "probability",
  SQUARE_ROOTS: "squareRoots",
  EXPRESSION_REVIEW: "expressionReview",
};

export const TopicsArray = [
  "expressions",
  "linearEquations",
  "linearInequalities",
  "idGraphs",
  "linearGraphs",
  "systems",
  "exponential",
  "factorPolynomial",
  "quadratic",
  "probability",
  "squareRoots",
  "expressionReview",
];

export const TopicTitles = {
  expressions: "Evaluate Expressions",
  linearEquations: "Solve Linear Equations",
  linearInequalities: "Solve Linear Inequalities",
  idGraphs: "Identify Functions",
  linearGraphs: "Write Linear Equations",
  systems: "Solve Systems of Equations",
  exponential: "Simplify Exponential Expressions",
  factorPolynomial: "Factor Polynomials",
  quadratic: "Simplify Quadratic Expressions",
  probability: "Probabiltiy",
  squareRoots: "Simplify Square Roots",
  expressionReview: "Simplify Expression Review",
};

export const COLORS = {
  LIGHT_BLUE: "#D4F1F4",
  MEDIUM_BLUE: "#189AB4",
  NAVY_BLUE: "#05445E",
  TEAL_BLUE: "#75E6DA",
};

export const BRONZE_SUCCESS = "#9d5400";
export const BRONZE_FAIL = "#9d540049";

export const SILVER_SUCCESS = "#bebebe";
export const SILVER_FAIL = "#bebebe49";

export const GOLD_SUCCESS = "#fff700";
export const GOLD_FAIL = "#fff70049";

export const goldTime = 25000;
export const silverTime = 50000;
export const bronzeTime = 100000;

export const goldLength = 100;
export const silverLength = 60;
export const bronzeLength = 30;

export const bronzeSpeedMessage = `Time Requirement: Less than ${
  bronzeTime / 1000
}s`;
export const silverSpeedMessage = `Time Requirement: Less than ${
  silverTime / 1000
}s`;
export const goldSpeedMessage = `Time Requirement: Less than ${
  goldTime / 1000
}s`;

export const bronzeLengthMessage = `Question Requirement: ${bronzeLength} Questions Answered`;
export const silverLengthMessage = `Question Requirement: ${silverLength} Questions Answered`;
export const goldLengthMessage = `Question Requirement: ${goldLength} Questions Answered`;
