import React, { useState } from "react";
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

//This is a function
function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Functions
  return (
    <div className="App">
      <header>
        <h1>Roger's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
