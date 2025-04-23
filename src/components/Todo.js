import React from "react";

function Todo(props) {
  return (
    <div style={{ marginBottom: 10, border: "1px solid red" }}>
      <h3 style={{ marginLeft: 10}}>{props.title}, {props.date}</h3>
      <p style={{ marginLeft: 10}}>{props.description + "ERROR"}</p>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "5px 10px",
          border: "none",
          cursor: "pointer",
          marginLeft: 10
        }}
        onClick={props.onDelete}
      >
        Slett
      </button>
    </div>
  );
}



export default Todo;
