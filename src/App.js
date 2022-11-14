import { useEffect, useState } from "react";
import './App.css'
import TodoForm from "./components/TodoForm"
import Todolist from "./components/Todolist"
import Testing from "./Test"

const LOCAL_STORAGE_KEY = "react-what-todo-todos";

export default function App() {
  const [todos, setTodos] = useState([]);
    
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos); //calls setTodos but only if its null
    }
  }, [])

  function addTodo(todo) { //addTodo function is a prop
    setTodos([todo, ...todos]) //todo=new, todos=old
  }

  return (
    <>
    <Testing />
    <TodoForm addTodo={addTodo} />
    <Todolist todos={todos} />
    </>
  );
}