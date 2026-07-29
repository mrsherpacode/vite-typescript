import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <h2> The count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default Counter;
