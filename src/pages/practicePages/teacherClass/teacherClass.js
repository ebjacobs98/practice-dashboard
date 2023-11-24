import React from "react";
import Header from "../../../components/practice/header/header";
import TeacherTopics from "../../../components/practice/teacherTopics/teacherTopics";
import StudentList from "../../../components/practice/studentList/studentList";
import { useParams } from "react-router";

const TeacherClass = () => {
  const { classId } = useParams();

  return (
    <>
      <Header />
      <TeacherTopics classId={classId} />
      <StudentList classId={classId} />
    </>
  );
};

export default TeacherClass;
