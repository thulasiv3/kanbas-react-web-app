import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <h2><HelloRedux/></h2>
      <h2><CounterRedux/></h2>
      <h2><AddRedux/></h2>
      <h2><TodoList/></h2>
    </div>
  );
};

export default ReduxExamples;