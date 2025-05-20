import './App.css'
import React, { useEffect, useRef, useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [inpAdd, setInpAdd] = useState("");
    const [inpSearch, setInpSearch] = useState("");
    const inputRef = useRef(null);
    const [flag, setFlag] = useState(true);
    const [found, setFound] = useState([]);
    const [find, setFind] = useState('');
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
    function OnTrue() {
      return flag ? <Additem /> : <SearchTask />;
    }
    function falseFlag() {
      setFlag((flag) => false);
      <OnTrue />;
    }
    function trueFlag() {
      setFlag((flag) => true);
      <OnTrue />;
    }
    function OnSearch() {
      return find ? <Found></Found> : <Todo />;
    }
    function Found() {
      return (
        <>
          <ol>
            {found.map((item, index) => {
              return <li key={index}> {item} </li>;
            })}
          </ol>
        </>
      );
    }
    function Todo() {
      return (
        <>
          <ol>
            {todo.map((item, index) => {
              return <li key={index}> {item} </li>;
            })}
          </ol>
        </>
      );
    }
    function Additem() {
      const onAdd = (event) => {
        setInpAdd(event.target.value);
      };
      function AddToAray(event) {
        try {
          inpAdd.trim();
          if (inpAdd !== "") {
            setTodo((prevTodo) => [...prevTodo, inpAdd]);
            setInpAdd("");
          } else {
            window.alert("Введите какую нибудь задачу");
          }
        } catch (error) {
          window.alert(error);
        }
      }
      return (
        <div className="add-div" id="add-div">
          <h1>Add new task</h1>
          <input type="text" ref={inputRef} value={inpAdd} onChange={onAdd} />
          <button onClick={AddToAray}>Add</button>
          <div className="list">
            <ol>
              {todo.map((item, index) => {
                return <li key={index}> {item} </li>;
              })}
            </ol>
          </div>
        </div>
      );
    }
    function SearchTask() {
      function save(event) {
        setInpSearch(event.target.value);
      }
      function search() {
        inpSearch.trim();
        if (inpSearch !== "") {
          for (let i = 0; i < todo.length; i++) {
            if (todo[i] === inpSearch) {
              if (!found.includes(todo[i])) {
                setFound((prevFound) => [...prevFound, inpSearch]);
                setFind((find) => true);
              }
              else {
                window.alert("такую задачу вы уже нашли")
              }
              break;
            }
          }
          
          setInpSearch("");
        } else {
          window.alert("Введите какую нибудь задачу");
        }
        if (!find) {
            window.alert("Такой задачи нету");
        }
      }
      return (
        <div className="search-div">
          <h1>Tasks</h1>
          Search task
          <input
            ref={inputRef}
            type="text"
            value={inpSearch}
            className="search-inp"
            onChange={save}
          />
          <button onClick={search}>Search</button>
          <OnSearch />
          {console.log(find)}
        </div>
      );
    }
  return(
    <div className="main">
    <div className="menu-btn">
      <button onClick={trueFlag}>Add new item</button>
      <button onClick={falseFlag}>See todoList</button>
    </div>
    <OnTrue />
  </div>
  )
};

export default TodoList;