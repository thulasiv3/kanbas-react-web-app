import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
import { FaEyeSlash } from "react-icons/fa";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes", 
  "Grades",  "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
  "Collaborations", "Syllabus" ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;