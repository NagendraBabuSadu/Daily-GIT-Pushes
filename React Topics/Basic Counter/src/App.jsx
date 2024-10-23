import React, { useState, useRef } from "react";

function App() {
  const [incomeTax, setIncomeTax] = useState();
  const divRef = useRef();

  setTimeout(() => {
    divRef.current.innerHTML = 19;
  }, 3000);

  return (
    <div>
      hi there,, your current income tax returns are{" "}
      <div ref={divRef}>{incomeTax}</div>{" "}
    </div>
  );
}

export default App;
