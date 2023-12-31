import { useState } from "react";

function CounterPage() {
  const initialValue = 5;
  const maxValue = 10;
  const [num, setNum] = useState(initialValue);
  const [grades, setGrades] = useState([10, 5]);

  const num2Arr = [-6, -5, -3, -2, -1, 1, 2, 3, 5, 6];

  const numHandler = (num2) => {
    // setNum(num + num2);
    setNum((prevNum) => prevNum + num2);
  };

  const resetHandler = () => {
    setNum(initialValue);
  };

  const numberColor = {
    color: num < 5 ? "red" : "green",
  };

  // const grades = [];

  const addGradeHandler = () => {
    setGrades((prevState) => {
      const newState = [...prevState];
      newState.unshift(num);
      return newState;
    });
  };

  return (
    <>
      <input
        type="number"
        value={num}
        max="10"
        min="1"
        onChange={(e) => setNum(Number(e.target.value))}
      ></input>
      <h3 style={numberColor}>{num}</h3>
      {num2Arr.map((number, index) => (
        <button
          key={index}
          onClick={() => numHandler(number)}
          disabled={
            (number < 1 && num <= number * -1) ||
            (number >= 1 && num > maxValue - number)
          }
        >
          {number <= 0 ? number : "+" + number}
        </button>
      ))}

      <button onClick={resetHandler}>Reset</button>

      <button onClick={addGradeHandler}>AddGrade</button>
      <div>
        <h4>Grades:</h4>
        <ul>
          {grades.map((grade, index) => (
            <li key={index}>
              {grade}
              <button>X</button>
            </li>
          ))}
        </ul>
      </div>

      {/* <button onClick={() => numHandler(-5)} disabled={num < 6}>
        -5
      </button>
      <button onClick={() => numHandler(-3)} disabled={num < 4}>
        -3
      </button>
      <button onClick={() => numHandler(-2)} disabled={num < 3}>
        -2
      </button>
      <button onClick={() => numHandler(-1)} disabled={num < 2}>
        -1
      </button> */}

      {/* <button onClick={() => numHandler(1)} disabled={num > 9}>
        +1
      </button>
      <button onClick={() => numHandler(2)} disabled={num > 8}>
        +2
      </button>
      <button onClick={() => numHandler(3)} disabled={num > 7}>
        +3
      </button>
      <button onClick={() => numHandler(5)} disabled={num > 5}>
        +5
      </button> */}
    </>
  );
}

export default CounterPage;
