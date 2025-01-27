import { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function Incherement() {
    setCount(count + 1);
  }
  function Dechrement() {
    setCount(count - 1);
  }
  function Rest() {
    setCount(0); // Просто передаємо 0 як нове значення
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Incherement}>Incherement</button>;
      <button onClick={Dechrement}> Dechrement</button>;
      <button onClick={Rest}>Rest</button>;
    </div>
  );
};

export default Counter;
