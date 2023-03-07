import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount = count + 1;
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount = count - 1;
  };

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      {count}
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
