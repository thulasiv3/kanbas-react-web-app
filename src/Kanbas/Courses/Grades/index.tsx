import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaCog, FaUpload, FaSearch, FaFilter, FaArrowRight } from "react-icons/fa";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <ul className="list-group wd-grades">
          <div className="d-flex flex-row-reverse bd-highlight">
            <div className="p-2 bd-highlight"><button className="btn btn-primary"
              style={{backgroundColor: 'white', color: 'black'}}><FaCog/></button>
          </div>
            <div className="p-2 bd-highlight"><select id="select-export" className="form-control">
                <option value="export" style={{backgroundColor: 'lightgrey', color: 'black'}}><FaArrowRight/> Export</option>
              </select></div>
            <div className="p-2 bd-highlight">
              <button className="btn btn-primary"
                style={{backgroundColor: 'lightgrey', color: 'black'}}><FaUpload/>
                Import</button>
              </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-6">
              <label htmlFor="student-names" className="form-label"> <strong>Student Names</strong> <FaSearch/> </label> 
              <input type="text" className="form-control" id="student-names"
                placeholder=  "Search Students"  />
            </div>
            <div className="col-6">
              <label htmlFor="assignment-names" className="form-label"> <strong>Assignment Names</strong>  <FaSearch/></label> 
               <input type="text" className="form-control" id="assignment-names"
                placeholder="Search Assignments" />
            </div>
          </div>
          <br />
          <div>
          <button className="btn btn-primary float-left" style={{backgroundColor: 'lightgrey', color: 'black'}}><FaFilter/>
            Apply
            Filters</button>
            </div>
          <br />
        </ul>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
        <thead>
  <tr>
    <th style={{ textAlign: 'center' }}>Student Name</th>
    {as.map((assignment) => (
      <th key={assignment._id} style={{ textAlign: 'center' }}>{assignment.title}</th>
    ))}
  </tr>
</thead>
<tbody>
  {es.map((enrollment) => {
    const user = users.find((user) => user._id === enrollment.user);
    return (
      <tr key={enrollment.user}>
        <td style={{ textAlign: 'center', color: 'red' }}>{user?.firstName} {user?.lastName}</td>
        {as.map((assignment) => {
          const grade = grades.find(
            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
          );
          return (
            <td key={assignment._id} style={{ textAlign: 'center' }}>{grade?.grade || ""}</td>
          );
        })}
      </tr>
    );
  })}
</tbody></table>
      </div>
      </div>);
}
export default Grades;

