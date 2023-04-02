import React from "react";
import { Routes, Route } from "react-router-dom";
import { TopicsArray } from "../constants/constants";

import Home from "../pages/home/home";
import LoginBox from "../pages/login/loginBox";
import GetUsersBox from "../pages/getUsersBox";
import Register from "../pages/register/register";
import Topic from "../pages/topic/topic";
import Classes from "../pages/classes/classes";
import TeacherClass from "../pages/teacherClass/teacherClass";
import TeacherStudent from "../pages/teacherStudent/teacherStudent";
import TeacherTopic from "../pages/teacherTopic/teacherTopic";
import Achievements from "../pages/achievements/achievements";

const RealApp = () => {
  return (
    <div className="App">
      <Routes>
        <Route key={"home"} path="/" element={<Home />} />
        <Route key={"login"} path="login" element={<LoginBox />} />
        <Route key={"register"} path="register" element={<Register />} />
        <Route key={"users"} path="users" element={<GetUsersBox />} />
        <Route key={"classes"} path="classes" element={<Classes />} />
        <Route
          key={"achievements"}
          path="achievements"
          element={<Achievements />}
        />
        {TopicsArray.map((entry) => (
          <Route key={entry} path={entry} element={<Topic type={entry} />} />
        ))}
        <Route
          key={"teacherCourse"}
          path="teacher/class/:classId"
          element={<TeacherClass />}
        />
        <Route
          key={"teacherCourse"}
          path="teacher/class/:classId/student/:studentId"
          element={<TeacherStudent />}
        />
        {TopicsArray.map((entry) => (
          <Route
            key={"teacherCourseTopic"}
            path={`teacher/class/:classId/${entry}`}
            element={<TeacherTopic topic={entry} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default RealApp;
