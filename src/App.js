import { useEffect, useState, useRef } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const currRef = useRef(0);


  const handleChange = (e) => {
    currRef.current = e.target.value;
    setCount(state => e.target.value);
  }

  const handleStart = (e) => {
    setIsActive(state => true);
    currRef.current = 0;
  }


  useEffect(() => {
    if (count === 0) { return setIsActive(state => false) }
    
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
      <input ref={currRef} onChange={handleChange} type={"number"} value={currRef.current} />
      {/* <button onClick={handleStart}>Set</button> */}
      <button onClick={handleStart}>Start</button>
      {
        isActive
          ?
          <p style={{ "background": "black", "color": "white" }}>{count}</p>
          :
          <p style={{ "background": "black", "color": "white" }}>Timer over!</p>
      }
    </div>
  );
}

export default App;
