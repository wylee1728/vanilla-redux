import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo, deleteToDo }) {
  console.log("Home[toDos]", toDos);
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log("mapStateToProps", state, ownProps);
  const toDos = state;
  return { toDos };
}

function mapDispatchToProps(dispatch) {
  console.log("dispatch", dispatch);
  return {
    addToDo: function (text) {
      dispatch(actionCreators.addToDo(text));
    },
    deleteToDo: function (id) {
      dispatch(actionCreators.deleteToDo(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
