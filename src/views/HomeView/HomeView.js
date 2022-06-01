import { useState, useEffect } from "react";

export const HomeView = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log(`Count is ${count}!`); // Detta blir när vi renderar sidan

    return () => {
      console.log(`Count is ${count}!`); // Detta blir då när vi lämnar sidan
    };
  }, [count]);
  return (
    <div>
      <h1>This is the HomeView!</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h3>Actual Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};
