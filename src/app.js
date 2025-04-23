import React from "react";
import TodoList from "./components/TodoList";

// Each functional component should have a default export
// which needs to be a function
// and that function should return something React understands

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
