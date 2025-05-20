import "./Calculator.css";
import React, { useState } from "react";

function Calculator() {
  const [inp, setinp] = useState('');

  function check() {
    try {
      inp.includes("/0" || "0/")
        ? setinp("на 0 не делиться")
        : setinp(eval(inp));
    } catch (error) {
      window.alert("Введите выражение");
    }
  }

  return (
    <div className="main-calc">
      <div className="inp">
        <input type="text" value={inp} className="inpp" />
      </div>
      <div className="btn">
        <button
          className="btng"
          value={inp + "7"}
          onClick={(e) => setinp(e.target.value)}
        >
          7
        </button>
        <button
          className="btng"
          value={inp + "8"}
          onClick={(e) => setinp(e.target.value)}
        >
          8
        </button>
        <button
          className="btng"
          value={inp + "9"}
          onClick={(e) => setinp(e.target.value)}
        >
          9
        </button>
        <button
          className="btno"
          value={inp + "*"}
          onClick={(e) => setinp(e.target.value)}
        >
          x
        </button>
        <button
          className="btng"
          value={inp + "4"}
          onClick={(e) => setinp(e.target.value)}
        >
          4
        </button>
        <button
          className="btng"
          value={inp + "5"}
          onClick={(e) => setinp(e.target.value)}
        >
          5
        </button>
        <button
          className="btng"
          value={inp + "6"}
          onClick={(e) => setinp(e.target.value)}
        >
          6
        </button>
        <button
          className="btno"
          value={inp + "/"}
          onClick={(e) => setinp(e.target.value)}
        >
          :
        </button>
        <button
          className="btng"
          value={inp + "1"}
          onClick={(e) => setinp(e.target.value)}
        >
          1
        </button>
        <button
          className="btng"
          value={inp + "2"}
          onClick={(e) => setinp(e.target.value)}
        >
          2
        </button>
        <button
          className="btng"
          value={inp + "3"}
          onClick={(e) => setinp(e.target.value)}
        >
          3
        </button>
        <button
          className="btno"
          value={inp + "-"}
          onClick={(e) => setinp(e.target.value)}
        >
          -
        </button>
        <button
          className="btng"
          value={inp + "."}
          onClick={(e) => setinp(e.target.value)}
        >
          .
        </button>
        <button
          className="btng"
          value={inp + "0"}
          onClick={(e) => setinp(e.target.value)}
        >
          0
        </button>
        <button
          className="btng"
          value={inp + "+"}
          onClick={(e) => setinp(e.target.value)}
        >
          +
        </button>
        <button
          className="btnr"
          value={""}
          onClick={(e) => setinp(e.target.value)}
        >
          C
        </button>
        <button className="btngr" onClick={check}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;