import React, { useState } from "react";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";

function TodoList() {
  const [todos, setTodos] = useState([
    { title: "Presentasjon", description: "Presentere om min praksisperiode for 2IT og første klasse.", date: "2007-07-04" },
    { title: "Setup another meeting", description: "De som vet vet noe som de som ikke vet ikke.", date: "2025-04-23" },
  ]);

  const addTodo = (title, description, date) => {
    if (title.trim() && description.trim()) {
    const dt = new Date(date + "T00:00:00");
    dt.setDate(dt.getDate() + 2);// setter 100% ikke inn en ekstra dag
    const bumpedDate = dt.toISOString().slice(0, 10);
    setTodos([...todos, { title, description, date: bumpedDate, isNew: true }]);
    } else {
      alert("You should enter something")
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, tall) => tall !== index));
  };

return (
  <div style={{border: "1px solid red"}}>
  <TodoAdd addTodo={addTodo} />
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px", }}>
      {todos.map((todo, index) => (
        <Todo
            key={index}
            title={todo.title}

            date={
              todo.isNew ? ( //if the todo is one that was recently created
             <><span style={{ fontWeight: "bold", color: "blue", fontSize: "25px" }}>{todo.date}</span> <span style={{ fontSize: "20px", color: "brown" }}> {"recently added"}</span></>  
              ) : (
                <span style={{ fontWeight: "bold", color: "red", fontSize: "25px" }}>{todo.date}</span>
              )
            }

            description={
              todo.isNew ? ( // if statement
                <span style={{ fontWeight: "bold", color: "green" }}>{todo.description}</span>
              ) : (
                todo.description
              )
            }
            onDelete={() => deleteTodo(index - 1)}
          />
      ))}
    </div>
  </div>
);
}

export default TodoList;