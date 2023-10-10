import { useState } from "react";

function CounterPage() {
  const initialValue = 5;
  const [num, setNum] = useState(initialValue);

  const numHandler = (num2) => {
    setNum(num + num2);
  };

  const resetHandler = () => {
    setNum(initialValue);
  };

  return (
    <>
      <h3>{num}</h3>
      <button onClick={() => numHandler(-5)} disabled={num < 6}>
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
      </button>

      <button onClick={resetHandler}>Reset</button>

      <button onClick={() => numHandler(1)} disabled={num > 9}>
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
      </button>
    </>
  );
}

export default CounterPage;
