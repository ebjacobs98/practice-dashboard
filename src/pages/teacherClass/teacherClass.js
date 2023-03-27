import React from "react";
import Header from "../../components/header/header";
import TeacherTopics from "../../components/teacherTopics/teacherTopics";
import StudentList from "../../components/studentList/studentList";
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
