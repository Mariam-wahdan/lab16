import React,{useEffect,useState} from "react";
export const No =()=>{ const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
      setCalculation(count * 2);
    }, [count]);

    return (
      <div>
        <h2>Counter with Effect</h2>
        <p>Count: {count}</p>
        <p>Calculation (count * 2): {calculation}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );}
    export default No;