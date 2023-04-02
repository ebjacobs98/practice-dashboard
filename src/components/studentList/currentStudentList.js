import React from "react";
import PropTypes from "prop-types";
import "../topics/topics.css";
import { useUsers } from "../../queries/userQueries";
import CurrentStudentLink from "./currentStudentLink";

const CurrentStudentList = ({ userIds, classId, refetch }) => {
  const { data, isLoading } = useUsers({
    userIds,
    type: "current",
  });
  if (isLoading) {
    return <></>;
  } else {
    return (
      <>
        {data.map((student) => (
          <CurrentStudentLink
            name={student.name}
            classId={classId}
            studentId={student._id}
            refetch={refetch}
          />
        ))}
      </>
    );
  }
};

export default CurrentStudentList;

CurrentStudentList.propTypes = {
  userIds: PropTypes.arrayOf(PropTypes.string),
  classId: PropTypes.string,
  refetch: PropTypes.func,
};
