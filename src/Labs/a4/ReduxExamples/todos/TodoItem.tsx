
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import {TodoType} from "../../../store"

// Define the type for the todo object
interface Todo {
  id: number;
  title: string;
}

// Define TodoItem component
function TodoItem({ todo }: { todo: TodoType }) { 
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
      {todo.title}
    </li>
  );
}

export default TodoItem;