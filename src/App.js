import { useState, useRef, useEffect, useLayoutEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [buttonStyle, setButtonStyle] = useState({});
  const buttonRef = useRef();

  // useEffect(() => {
  //   const random = Math.floor(Math.random() * 500);
  //   for (let i = 0; i <= 1000000; i++) {
  //     if (i === 1000000) setButtonStyle({ marginTop: `${random}px`, padding: '50px'})

  //   }
  // }, [count])
  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    for (let i = 0; i <= 1000000; i++) {
      if (i === 1000000)
        setButtonStyle({ marginTop: `${random}px`, padding: "50px" });
    }
  }, [count]);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <button
        ref={buttonRef}
        style={buttonStyle}
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
