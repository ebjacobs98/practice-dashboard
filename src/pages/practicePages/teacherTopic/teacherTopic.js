import React from "react";
import PropTypes from "prop-types";
import Header from "../../../components/practice/header/header";
import ClassTopic from "../../../components/practice/classTopic/classTopic";
import { useParams } from "react-router";

const TeacherTopic = ({ topic }) => {
  const { classId } = useParams();

  return (
    <>
      <Header />
      <ClassTopic classId={classId} topic={topic} />
    </>
  );
};

export default TeacherTopic;

TeacherTopic.propTypes = {
  topic: PropTypes.string,
};
