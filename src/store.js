import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo(), deleteToDo());

const initialState = () => {
  const toDos = localStorage.getItem("toDos") || [];
  console.log("initialState", JSON.parse(toDos));
  return JSON.parse(toDos);
};

const reducer = (state = initialState(), action) => {
  let toDos;
  switch (action.type) {
    case addToDo.type:
      toDos = [{ text: action.payload, id: Date.now() }, ...state];
      //only frontend
      localStorage.setItem("toDos", JSON.stringify(toDos));
      return toDos;
      break;
    case deleteToDo.type:
      toDos = state.filter((todo) => todo.id !== action.payload);
      //only frontend
      localStorage.setItem("toDos", JSON.stringify(toDos));
      return toDos;
      break;
    default:
      return state;
  }
};

const store = createStore(reducer);

export { addToDo, deleteToDo };

export default store;
