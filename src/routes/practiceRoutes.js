import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopicsArray } from "../constants/constants";

import PracticeHome from "../pages/practicePages/practiceHome/practiceHome";
import LoginBox from "../pages/practicePages/login/loginBox";
import GetUsersBox from "../pages/practicePages/getUsersBox";
import Register from "../pages/practicePages/register/register";
import Topic from "../pages/practicePages/topic/topic";
import Classes from "../pages/practicePages/classes/classes";
import TeacherClass from "../pages/practicePages/teacherClass/teacherClass";
import TeacherStudent from "../pages/practicePages/teacherStudent/teacherStudent";
import TeacherTopic from "../pages/practicePages/teacherTopic/teacherTopic";
import Achievements from "../pages/practicePages/achievements/achievements";

const PracticeRoutes = () => {
  return (
    <Routes>
      <Route
        key={"practiceHome"}
        path="practiceApp"
        element={<PracticeHome />}
      />
      <Route key={"login"} path="practiceApp/login" element={<LoginBox />} />
      <Route
        key={"register"}
        path="practiceApp/register"
        element={<Register />}
      />
      <Route key={"users"} path="practiceApp/users" element={<GetUsersBox />} />
      <Route key={"classes"} path="practiceApp/classes" element={<Classes />} />
      <Route
        key={"achievements"}
        path="practiceApp/achievements"
        element={<Achievements />}
      />
      {TopicsArray.map((entry) => (
        <Route
          key={entry}
          path={`practiceApp/${entry}`}
          element={<Topic type={entry} />}
        />
      ))}
      <Route
        key={"teacherCourse"}
        path="practiceApp/teacher/class/:classId"
        element={<TeacherClass />}
      />
      <Route
        key={"teacherCourse"}
        path="practiceApp/teacher/class/:classId/student/:studentId"
        element={<TeacherStudent />}
      />
      {TopicsArray.map((entry) => (
        <Route
          key={"teacherCourseTopic"}
          path={`practiceApp/teacher/class/:classId/${entry}`}
          element={<TeacherTopic topic={entry} />}
        />
      ))}
    </Routes>
  );
};

export default PracticeRoutes;
