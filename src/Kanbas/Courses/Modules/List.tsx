import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams<{ courseId: string }>();
  const modulesList: { _id: string; name: string; lessons?: { _id: string; name: string }[]; course: string }[] = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState<{ _id: string; name: string; lessons?: { _id: string; name: string }[]; course: string } | null>(modulesList[0] || null);

  return (
    <>
      <div className="row mb-3" style={{flexGrow:"1"}}>
        <div className="d-flex justify-content-end wd-buttons">
          
            <button className="btn btn-primary me-2" style ={{backgroundColor: 'lightgray', color: 'black'}}>Collapse All</button>
            <button className="btn btn-primary me-2" style ={{backgroundColor: 'lightgray', color: 'black'}}>View Progress</button>
            <select id="select-publish-option" className="form-control me-2">
              <option value="publishAll" style ={{backgroundColor: 'lightgray', color: 'black'}}>Publish All</option>
            </select>
            <button className="btn btn-primary me-2 wd-mod-button"><FaPlus /> Module</button>
            <button className="btn btn-primary" style ={{backgroundColor: 'lightgray', color: 'black'}}><FaEllipsisV className="ms-2" /></button>
          
        </div>
      </div>
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
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
                {module.lessons?.map((lesson, lessonIndex) => (
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