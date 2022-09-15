import { useEffect, useState, useContext } from "react";
import Todo from "../components/Todolist.jsx";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconSunHigh,
  IconMoon,
} from "@tabler/icons";
import { themes } from '../libs/themes.js';
import { ThemeContext } from "../contexts/ThemeContext.js";
import Navbar from "../components/Navbar.jsx";

export default function Lab07() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFirstRender,setIsFirstRender] = useState(true);
  const [Theme, setTheme] = useState(themes.light);

  useEffect(() => {
    if(isFirstRender){
      setIsFirstRender(false);
      return;
    }
    saveTodos()
  },[todos]);

  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    if(todoStr === null) setTodos([]);
    else setTodos(JSON.parse(todoStr));
  },[]);

  const enterTodo = (v) => {
    if(v !== "Enter") return;
    if(todoInput === ""){
      alert("Todo cannot be empty");
      return;
    }
    setTodos([{title: todoInput,completed: false}, ...todos]);
    setTodoInput("")
  };

  const deleteTodo = (idx) => {
    todos.splice(idx,1);
    setTodos([...todos]);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if(idx === 0) return;
    const temp = todos[idx];
    todos[idx] = todos[idx-1];
    todos[idx-1] = temp;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if(idx === todos.length-1) return;
    const temp = todos[idx];
    todos[idx] = todos[idx+1];
    todos[idx+1] = temp;
    setTodos([...todos]);
  };

  const saveTodos = () => {
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("react-todos",todosStr);
  };

  const toggleTheme = () => {
    if(Theme.name === "light") setTheme(themes.dark);
    else setTheme(themes.light);
  }

  return (
  <div style={{backgroundColor: Theme.background, minHeight: "100vh"}}>
    <Navbar />
    <div style={{backgroundColor: Theme.background, minHeight: "100vh"}}>
      {/* Entire App container (required for centering) */}
      <ThemeContext.Provider value={{ Theme }}>
        <div style={{ maxWidth: "700px" }} className="mx-auto">
          {/* App header */}
          <p className="display-4 text-center fst-italic m-4" style={{color: Theme.foreground}}>
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          {/* Input */}
          <div className="d-flex align-items-center gap-2">
          <input
            onChange={(e) => {setTodoInput(e.target.value)}}
            value={todoInput}
            onKeyUp={(e) => {enterTodo(e.key)}}
            className="form-control mb-1 fs-4"
            placeholder="insert todo here..."
          />
          <button className="btn btn-dark" onClick={toggleTheme}>
            {Theme.name === "light" && <IconSunHigh />}
            {Theme.name === "dark" && <IconMoon />}
          </button>
          </div>

          {/* Todos */}
          {
            todos.map((todo,i) => (<Todo 
              key={i} 
              title={todo.title} 
              completed={todo.completed} 
              onMark={() => markTodo(i)} 
              onMoveUp={() => moveUp(i)}
              onMoveDown={() => moveDown(i)}
              onDelete={() => deleteTodo(i)} 
              />))
          }

          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">Pending ({todos.filter((x) => x.completed === false).length}) </span>
            <span className="text-success">Completed ({todos.filter((x) => x.completed === true).length})</span>
          </p>

          {/* Made by section */}
          <p className="text-center mt-3 text-muted fst-italic">
            made by Jedsadakorn Kritsadakul 640610623
          </p>
        </div>
      </ThemeContext.Provider>
    </div>
  </div>
  );
}
