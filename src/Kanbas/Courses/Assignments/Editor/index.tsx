import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./../assignmentsReducer";
import db from "../../../Database";
import { KanbasState } from "../../../store";




function AssignmentEditor() {
  const { courseId } = useParams<{ courseId: string }>();
  const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function saveChanges(assignmentName : string){
    if(assignmentName == assignment.name){
    dispatch(updateAssignment(assignment._id))
    }else{
      dispatch(addAssignment(assignment))
    }
  }
  // const handleSave = () => {
  //   console.log("Actually saving assignment TBD in later assignments");
  //   navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  // };

  const numRows = 4;
  const numCols = 100;
  return (
    <div>
      <h4>Assignment Name</h4>
      <input value={assignment.name}
        className="form-control mb-2" onChange={(e) => dispatch(setAssignment({ ...assignment, name: e.target.value }))
        } />
      <textarea rows={numRows} cols={numCols} value={assignment.description} onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))
      }>
        Enter assignment description here
      </textarea>
      <div className="mb-3">
      <label htmlFor="points"> Points </label>
      <input value={assignment.points}
        className="form-control mb-2" id="points" onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))
        } />
        </div>
      <div className="mb-3">
        <label htmlFor="due-date"> Due </label>
        <input type="date" value = {assignment.dueDate} id="due-date" className="form-control" onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
        }/>
      </div>
      <div className="mb-3">
        <label htmlFor="available-from"> Available From </label>
        <input type="date" value = {assignment.availableFromDate} id="available-from" className="form-control" onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))}/>
      </div>
      <div className="mb-3">
        <label htmlFor="until"> Until </label>
        <input type="date" value = {assignment.availableUntilDate} id="until" className="form-control" />
      </div>

      <br />
      <br />
     
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end" style={{marginRight: "10px"}} // Added mr-2 class for margin-right
        onClick={() => saveChanges(assignment.name)}>
        Save
      </Link>
      
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
        style={{ backgroundColor: "lightgrey", color: "black" }}>
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;