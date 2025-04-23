import React, { useState } from "react";

function TodoAdd(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState(""); 
  const [newDate, setNewDate] = useState(""); 

function handleAddTodo() {
    props.addTodo(newTitle, newDescription, newDate)
}

return (
  <>
    <div
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <br></br><br></br><br></br>
      <h1 className="mb-3">TODO liste</h1>
      <input
        className="mb-2 form-control"
        type="text"
        placeholder="Beskrivelse"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        style={{ width: "300px", padding: "10px" }}
      />
      <input
        className="mb-2 form-control"
        type="text"
        placeholder="Tittel"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        style={{ width: "300px", padding: "10px" }}
      />
      <input
        className="mb-2 form-control"
        type="date"
        placeholder="Date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
        style={{ width: "300px", padding: "10px" }}
      />
      <button  onClick={handleAddTodo}>Legg til Todo</button>
      <br></br><br></br><br></br>
      </div>
      </>
      )
    };

export default TodoAdd;