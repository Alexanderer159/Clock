import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="counter mt-5 text-center">
      <h1 className="display-1">{count}</h1>
    </div>
  );
};

export default Counter;