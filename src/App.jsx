import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Calculator from "./Calculator.jsx";
import TodoList from "./TodoList.jsx";
import { BrowserRouter , Route , Router , Link } from "react-router-dom";

function CalculatorOld() {
  const [value, setinp] = useState("");

  return (
    <div className="main">
      <div className="input">
        <input type="text" value={value} />
      </div>
      <div className="btn">
        <button
          className="btnc"
          value="7"
          onClick={(e) => setinp(value + e.target.value)}
        >
          7
        </button>
        <button className="btnc">8</button>
        <button className="btnc">9</button>
        <button className="btng">/</button>
        <button className="btnc">4</button>
        <button className="btnc">5</button>
        <button className="btnc">6</button>
        <button className="btng">*</button>
        <button className="btnc">1</button>
        <button className="btnc">2</button>
        <button className="btnc">3</button>
        <button className="btng">-</button>
        <button className="btnr">C</button>
        <button className="btnc">0</button>
        <button className="btnc">.</button>
        <button className="btng">+</button>
        <button className="btnc">d</button>
        <button className="btnf"> = </button>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
    {/* <TodoList></TodoList> */}
    <Calculator></Calculator>
    </>
  );
}
// function Menu() {
//   const [menuFlag, setmenuFlag] = useState("");
//   function truemenu() {
//     setmenuFlag((menuFlag) => true);
//   }
//   function falsemenu() {
//     setmenuFlag((menuFlag) => false);
//   }
// //   function MenuRender() {
// //     return (
// //           <div>
// //             < ul>
// //                 <li><Link to="/">Home</Link></li>
// //         <li><Link to='/todo'>Todo</Link></li>
// //         <li><Link to='/calc'>Calculator</Link></li>
// //         {/* <li><Link>About US</Link></li> */}
// //       </ul>
// //       <Route exact path="/" Component={<App/>}></Route>
// //       <Route path="/todo" Component={<TodoList/>}></Route>
// //       <Route path="/calc" Component={<Calculator/>}></Route>
// //     </div>
// //     );
// //   }
// //   return (<MenuRender />)
// }
export default App