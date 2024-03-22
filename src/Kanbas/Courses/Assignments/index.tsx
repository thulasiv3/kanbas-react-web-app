import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaBook } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
import { KanbasState } from "../../store";



function Assignments() {
  const { courseId } = useParams<{ courseId: string }>();
  const assignmentList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);

  const dispatch = useDispatch();

  function deleteDialog(assignmentId: string) {
    const userResponse = window.confirm("Are you sure you want to delete this assignment?");
    if (userResponse) {
      dispatch(deleteAssignment(assignmentId));
      // dispatch(updateAssignment(assignment));
    } else {

    }
  }


  // const { courseId } = useParams();
  // const assignmentList = db.assignments.filter((assignment) => assignment.course === courseId);

  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col">
          <form id="assignment-search" className="d-inline">
            <input id="search-assignments" className="form-control w-100" placeholder="Search for Assignments" />
          </form>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary me-2" style={{ backgroundColor: 'lightgray', color: 'black' }}><FaPlus /> Group</button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}/`} style={{ backgroundColor: 'red'}}
        className="btn btn-primary me-2"> 
       <FaPlus /> Assignment
      </Link>
          <button className="btn btn-primary" style={{ backgroundColor: 'lightgray', color: 'black' }}><FaEllipsisV /></button>
        </div>
      </div>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <button className="btn btn-primary me-2" style={{ backgroundColor: 'lightgray', color: 'black', border: '1px solid black', borderRadius: '30%' }}>
                40% of Total
              </button>
              <FaPlus className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.filter((assignment) => assignment.course == courseId).map((assignment) => (
              <li className="list-group-item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: "10px" }}>
                    <FaEllipsisV className="me-2" />
                    <FaBook className="me-2" />
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                  </div>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => deleteDialog(assignment._id)}
                    style={{ backgroundColor: "lightgrey", color: "black", borderRadius: "10px", width: "60px", height: "30px"}}
                  >
                    Delete
                  </button>
                </div>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;