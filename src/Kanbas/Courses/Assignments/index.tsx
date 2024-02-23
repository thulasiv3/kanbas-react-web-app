import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPlus, FaBook } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter((assignment) => assignment.course === courseId);

  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col">
          <form id="assignment-search" className="d-inline">
            <input id="search-assignments" className="form-control w-100" placeholder="Search for Assignments" />
          </form>
        </div>
        <div className="col-auto">
          <button className="btn btn-primary me-2" style={{ backgroundColor: 'lightgray', color:'black' }}><FaPlus /> Group</button>
          <button className="btn btn-primary me-2" style={{ backgroundColor: 'red' }}><FaPlus /> Assignment</button>
          <button className="btn btn-primary" style={{ backgroundColor: 'lightgray' , color:'black'}}><FaEllipsisV /></button>
        </div>
      </div>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <button className="btn btn-primary me-2" style={{ backgroundColor: 'lightgray', color: 'black', border: '1px solid black',  borderRadius: '30%' }}>
                40% of Total
              </button>
              <FaPlus className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaBook className="me-2" />
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
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