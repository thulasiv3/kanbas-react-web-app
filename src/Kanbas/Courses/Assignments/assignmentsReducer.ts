import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";





const initialState = {
  assignments: db.assignments,
  assignment: { name: "", description: "", points: "100",
     dueDate: new Date().toISOString().split('T')[0], availableFromDate: new Date().toISOString().split('T')[0], availableUntilDate: new Date().toISOString().split('T')[0]},
     //not sure if the date stuff is right
};


const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString()},
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
  updateAssignment, setAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;