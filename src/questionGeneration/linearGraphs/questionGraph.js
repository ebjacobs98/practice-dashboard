import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import { COLORS } from "../../constants/constants";

const QuestionGraph = ({ slope, yInt }) => {
  const x1 = Math.floor(Math.random() * 7) - 7;
  let x2 = Math.floor(Math.random() * 7) - 7;
  x2 = x2 === x1 ? x2 - 1 : x2;

  const x3 = Math.floor(Math.random() * 7) + 1;
  let x4 = Math.floor(Math.random() * 7) + 1;
  x4 = x4 === x3 ? x4 + 1 : x4;

  const data = [
    { x: x1, y: slope * x1 + yInt },
    { x: x2, y: slope * x2 + yInt },
    { x: x3, y: slope * x3 + yInt },
    { x: x4, y: slope * x4 + yInt },
  ];

  return (
    <ResponsiveContainer width={"100%"} height={200}>
      <LineChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 30,
          bottom: 30,
        }}
      >
        <XAxis
          dataKey="x"
          domain={["auto", "auto"]}
          type="number"
          interval={0}
        />
        <YAxis domain={["auto", "auto"]} type="number" interval={0} />
        <ReferenceLine
          y={0}
          stroke="gray"
          strokeWidth={1.5}
          strokeOpacity={0.65}
        />
        <ReferenceLine
          x={0}
          stroke="gray"
          strokeWidth={1.5}
          strokeOpacity={0.65}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="y" stroke={COLORS.MEDIUM_BLUE} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default QuestionGraph;

QuestionGraph.propTypes = {
  slope: PropTypes.number.isRequired,
  yInt: PropTypes.number.isRequired,
};
