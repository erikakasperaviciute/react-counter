import { useState } from "react";

function CounterPage() {
  const initialValue = 5;
  const [num, setNum] = useState(initialValue);

  const minus1Handler = () => {
    setNum(num - 1);
  };

  const plus1Handler = () => {
    setNum(num + 1);
  };

  const minus2Handler = () => {
    setNum(num - 2);
  };

  const plus2Handler = () => {
    setNum(num + 2);
  };

  const minus3Handler = () => {
    setNum(num - 3);
  };

  const plus3Handler = () => {
    setNum(num + 3);
  };

  const minus5Handler = () => {
    setNum(num - 5);
  };

  const plus5Handler = () => {
    setNum(num + 5);
  };

  const resetHandler = () => {
    setNum(initialValue);
  };
  return (
    <>
      <h3>{num}</h3>
      <button onClick={minus5Handler} disabled={num < 6}>
        -5
      </button>
      <button onClick={minus3Handler} disabled={num < 4}>
        -3
      </button>
      <button onClick={minus2Handler} disabled={num < 3}>
        -2
      </button>
      <button onClick={minus1Handler} disabled={num < 2}>
        -1
      </button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={plus1Handler} disabled={num > 9}>
        +1
      </button>
      <button onClick={plus2Handler} disabled={num > 8}>
        +2
      </button>
      <button onClick={plus3Handler} disabled={num > 7}>
        +3
      </button>
      <button onClick={plus5Handler} disabled={num > 5}>
        +5
      </button>
    </>
  );
}

export default CounterPage;
