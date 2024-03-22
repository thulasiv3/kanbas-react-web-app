import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-primary" style={{ backgroundColor: "green" }}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteElement(index)} className="btn btn-primary" style={{ backgroundColor: "red" }}>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;