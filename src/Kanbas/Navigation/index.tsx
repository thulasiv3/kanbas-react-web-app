import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelope, FaClock, FaDesktop, FaArrowCircleRight, FaQuestionCircle } from "react-icons/fa";
import logoImage from "./../images/northeastern_feature.png";

function KanbasNavigation() {
    // const iconStyle = {
    //     color: 'red' 
    //   };
    
      const accountStyle ={
        color: 'grey'
      };

    const pictureStyle = {
        width:80,
        height:80,
        marginBottom: '5px'
    };
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2"  style={accountStyle}/> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaEnvelope className="fs-2"/> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Studio",  icon: <FaDesktop className="fs-2" /> },
    { label: "Commons",  icon: <FaArrowCircleRight className="fs-2" /> },
    { label: "Help",  icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        {logoImage && <img src={logoImage} style={pictureStyle}/>}
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <a>
            <Link to={`/Kanbas/${link.label}`}> <i>{link.icon} </i> {link.label}  </Link>
            </a>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;