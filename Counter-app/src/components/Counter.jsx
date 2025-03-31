import { useState } from "react";
import "./Counter.css"; // Import CSS for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
