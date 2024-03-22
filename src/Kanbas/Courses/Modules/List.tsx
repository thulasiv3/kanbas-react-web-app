import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams<{ courseId: string }>();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
const dispatch = useDispatch();


  interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}



  const [selectedModule, setSelectedModule] = useState<{ _id: string; name: string; lessons?: { _id: string; name: string }[]; course: string } | null>(moduleList[0] || null);

  return (
    <>
      <div className="row mb-3" style={{ flexGrow: "1" }}>
        <div className="d-flex justify-content-end wd-buttons">

          <button className="btn btn-primary me-2" style={{ backgroundColor: 'lightgray', color: 'black' }}>Collapse All</button>
          <button className="btn btn-primary me-2" style={{ backgroundColor: 'lightgray', color: 'black' }}>View Progress</button>
          <select id="select-publish-option" className="form-control me-2">
            <option value="publishAll" style={{ backgroundColor: 'lightgray', color: 'black' }}>Publish All</option>
          </select>
          <button className="btn btn-primary me-2 wd-mod-button"><FaPlus /> Module</button>
          <button className="btn btn-primary" style={{ backgroundColor: 'lightgray', color: 'black' }}><FaEllipsisV className="ms-2" /></button>

        </div>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button className="btn btn-primary me-2" style={{ backgroundColor: "lightgrey", color: "black", borderRadius: "10px", width: "60px", height: "30px", border: "1px solid black"}} onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button className="btn btn-primary me-2" style={{ backgroundColor: "lightgrey", color: "black", borderRadius: "10px", width: "60px", height: "30px", border: "1px solid black"}} onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
          <input className="form-control" style={{border: "1px solid black"}} value={module.name} 
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
          }/>

          <textarea className="form-control" style={{border: "1px solid black"}} value={module.description}
            onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))
          }/>

        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
                          <button className="btn btn-primary me-2" style={{ backgroundColor: "lightgrey", color: "black", borderRadius: "10px", width: "60px", height: "30px", border: "1px solid black"}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <button className="btn btn-primary me-2" style={{ backgroundColor: "lightgrey", color: "black", borderRadius: "10px", width: "60px", height: "30px", border: "1px solid black"}}
                 onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>

              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule?._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: Lesson, lessonIndex: number) => (
                    <li className="list-group-item" key={lessonIndex}>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}

export default ModuleList;