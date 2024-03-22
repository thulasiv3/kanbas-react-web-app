
import courses from "../../Kanbas/Database/courses.json";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses } from "react-icons/fa";

import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";



function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();


  const breadcrumbParts = pathname.split("/").map(part => part.charAt(0).toUpperCase() + part.slice(1));
  const lastBreadcrumb = breadcrumbParts[breadcrumbParts.length - 1];


  return (
    <div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h5 style={{ color: "red", margin: 0 }}>
            <HiMiniBars3 /> {course?._id} {course?.name}
            {lastBreadcrumb && (
              <span>
                <span> {'>'} </span>
                <Link to={"/" + pathname.split("/").slice(1).join("/")} style={{ color: "black" }}>
                  {lastBreadcrumb}
                </Link>
              </span>
            )}
           
            <button className="btn btn-primary border border-secondary float-end" style={{ backgroundColor: 'lightgrey', color: 'black' }}>
          <FaGlasses /> Student View
        </button>
          </h5>
        </div>

      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />


            <Route path="Modules" element={<Modules />} />

            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
            <Route path="Rubrics" element={<h1>Rubrics</h1>} />
            <Route path="Outcomes" element={<h1>Outcomes</h1>} />
            <Route path="Collaborations" element={<h1>Collaborations</h1>} />
            <Route path="Syllabus" element={<h1>Syllabus</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;