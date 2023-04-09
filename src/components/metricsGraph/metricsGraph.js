import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../../constants/constants";

const MetricsGraph = ({ metrics }) => {
  const data = metrics.map((entry, index) => ({
    attempt: `${index + 1}`,
    time: entry / 1000,
  }));

  return (
    <ResponsiveContainer width={"100%"} height={200}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Line type="monotone" dataKey="time" stroke={COLORS.MEDIUM_BLUE} />
        <XAxis
          label={{
            value: `Attempt (#)`,
            style: { textAnchor: "middle" },
            angle: 0,
            position: "bottom",
            offset: 0,
          }}
          dataKey="attempt"
        />
        <YAxis
          label={{
            value: `Time (s)`,
            style: { textAnchor: "middle" },
            angle: -90,
            position: "insideLeft",
            offset: 0,
          }}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MetricsGraph;

MetricsGraph.propTypes = {
  metrics: PropTypes.arrayOf(PropTypes.number),
};
