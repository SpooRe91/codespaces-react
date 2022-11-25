import { useEffect, useState, useRef } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const currRef = useRef(0);


  const handleChange = (e) => {

    if (currRef.current !== 0) {
      setCount(currRef.current.value);
    } else {
      currRef.current = e.target.value;
      setCount(state => e.target.value);
    }
    if (count < 0) { return }
  }

  const handleStart = (e) => {
    if (e.target.textContent === "Stop") {
      setIsActive(state => false);
      currRef.current.value = count;
    } else {
      if (count <= 0) { setCount(state => state = 0) }
      setIsActive(state => true);
      currRef.current.value = 0;
    }
  }


  useEffect(() => {
    if (count <= 0) { return setIsActive(state => false) }

    if (isActive) {
      const interval = setInterval(() => {
        setCount(prev => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);

      };
    }
  }, [isActive, count])


  return (
    <div>
      <input disabled={isActive} ref={currRef} onChange={handleChange} type={"number"} min={0} placeholder='enter seconds'/>

      <button onClick={handleStart}>{!isActive ? "Start" : "Stop"}</button>
      {
        <p style={{ "background": "black", "color": "white" }}>
          {
          isActive 
          ? count 
          : 'Timer stopped!'
          }
        </p>
      }
    </div>
  );
}

export default App;
