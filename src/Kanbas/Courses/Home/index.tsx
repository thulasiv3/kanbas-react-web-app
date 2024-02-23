import ModuleList from "../Modules/";
import { FaCalendar, FaBan, FaCheckCircle, FaDownload, FaArrowCircleRight, FaCrosshairs, FaChartBar, FaBullhorn, FaBell  } from "react-icons/fa";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div className="offset-md-0">
          <ModuleList />
        </div>
      </div>
      <div style={{ flex: "0 0 250px", marginLeft: "20px" }}>
        <h4>Course Status</h4>
        <br />
        <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'white', color: 'black' }}> <FaBan /> Unpublish</button>
        <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'green', color: 'white' }}>
          <FaCheckCircle /> Published</button>
        <br />
        <br />
        <div className="side-buttons" style={{ textAlign: 'left' }}>
          <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'lightgray', width: '250px' }}><a
            href="#" style={{ color: 'black' }}> <FaDownload /> Import Existing Content </a></button>
          <br />
          <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'lightgray', width: '250px' }}> <a
            href="#" style={{ color: 'black' }}> <FaArrowCircleRight /> Import from Commons </a></button>

          <br />
          <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'lightgray', width: '250px' }}><a
            href="#" style={{ color: 'black' }}> <FaCrosshairs /> Choose Home Page </a></button>
          <br />
          <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'lightgray', width: '250px' }}><a
            href="#" style={{ color: 'black' }}> <FaChartBar /> View Course Stream </a></button>
          <br />
          <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'lightgray', width: '250px' }}><a
            href="#" style={{ color: 'black' }}> <FaBullhorn /> New Announcement </a></button>
          <br />
          <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'lightgray', width: '250px' }}><a
            href="#" style={{ color: 'black' }}> <FaChartBar /> New Analytics </a></button>
          <br />
          <button className="btn btn-primary border border-secondary" style={{ backgroundColor: 'lightgray', width: '250px' }}><a
            href="#" style={{ color: 'black' }}> <FaBell /> View Course Notifications </a></button>
        </div>
        <br />
        <br />
        <h4>To Do</h4>
        <hr />

        <a href="#" style = {{color:'red'}}>Grade A1</a>
        <br />
        <br />
        <a href="#" style = {{color:'red'}}>Grade A2</a>
        <br />
        <br />
        <a href="#" style = {{color:'red'}}>Grade A3</a>
        <br />
        <br />
        <h4 >Coming Up </h4><a href="https://www.timeanddate.com/calendar/" style = {{color:'red'}}>

          <FaCalendar/> View Calendar</a>
        <hr />

        <a href="#" style = {{color:'red'}}><FaCalendar /> Lecture Sep 7 at 11:45am</a>
        <br />
        <br />
        <a href="#" style = {{color:'red'}}><FaCalendar /> Lecture Sep 11 at 11:45am</a>
        <br />
        <br />
        <a href="#" style = {{color:'red'}}><FaCalendar /> Lecture Sep 11 at 6pm</a>

      </div>
    </div>
  );
}
export default Home;