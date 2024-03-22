import React, { useState } from "react";
function Counter() {
//   let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary" style={{ backgroundColor: "green" }}>Up</button>
      <button onClick={() => setCount(count - 1)} className="btn btn-primary" style={{ backgroundColor: "red" }}>Down</button>
    </div>
  );
}
export default Counter;