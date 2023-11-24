import React from "react";
import PropTypes from "prop-types";
import "../topics/topics.css";
import { useUsers } from "../../../queries/userQueries";
import PendingStudentLink from "./pendingStudentLink";

const PendingStudentList = ({ userIds, classId, refetch }) => {
  const { data, isLoading } = useUsers({
    userIds,
    type: "pending",
  });
  if (isLoading) {
    return <></>;
  } else {
    return (
      <>
        {data?.map((student) => (
          <PendingStudentLink
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

export default PendingStudentList;

PendingStudentList.propTypes = {
  userIds: PropTypes.arrayOf(PropTypes.string),
  classId: PropTypes.string,
  refetch: PropTypes.func,
};
