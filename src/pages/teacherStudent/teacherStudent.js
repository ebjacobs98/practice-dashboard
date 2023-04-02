import React from "react";
import Header from "../../components/header/header";
import StudentData from "../../components/studentData/studentData";
import { useParams } from "react-router";

const TeacherStudent = () => {
  const { studentId } = useParams();

  return (
    <>
      <Header />
      <StudentData studentId={studentId} />
    </>
  );
};

export default TeacherStudent;
