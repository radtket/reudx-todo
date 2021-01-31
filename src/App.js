import React from "react";

// Inputs
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div
      style={{
        maxWidth: 650,
        margin: "200px auto",
      }}
    >
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
