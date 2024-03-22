

import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples/";



function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

  return(
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <h5>element={<ClickEvent/>}</h5>
      <h5>element={<PassingDataOnEvent/>}</h5>
      <PassingFunctions theFunction={sayHello} />
      <h5>element={<EventObject/>}</h5>
      <h5>element={<Counter/>}</h5>
      <h5>element={<BooleanStateVariables/>}</h5>
      <h5>element={<StringStateVariables/>}</h5>
      <h5>element={<DateStateVariable/>}</h5>
      <h5>element={<ObjectStateVariable/>}</h5>
      <h5>element={<ArrayStateVariable/>}</h5>
      <h5>element={<ParentStateComponent/>}</h5>
    </>
  );
};
export default Assignment4;