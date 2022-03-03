import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  //console.log(state, action);

  state.map;

  switch (action.type) {
    case ADD_TODO:
      state = [{ text: action.text, id: Date.now() }, ...state];
      return state;
      break;
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
      break;
    default:
      return state;
  }
};

const store = createStore(reducer);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteToDo = (id) => {
  store.dispatch({ type: DELETE_TODO, id });
};

const btnClick = (e) => {
  console.log("eeeeeeeeeee", e);
  deleteToDo(e.target.parentNode.id);
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.map((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", btnClick);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);
