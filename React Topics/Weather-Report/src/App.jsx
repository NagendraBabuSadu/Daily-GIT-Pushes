import React, { useState } from "react";
import Temperature from "./components/Temperature";
import img1 from "./images/img1.jpg";

function App() {
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");

  const divStyle = {
    margin: "40px",
    border: "5px solid darkblue",
    borderRadius: "10px",
    padding: "30px",
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
    backgroundColor: "lightblue",
    fontFamily: "Arial",
    height: "400px",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <div
        style={{
          ...divStyle,
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div>
          <h1>Weather Report</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            margin: "10px",
          }}
        >
          <div>
            <h2
              style={{
                width: "300px",
                textTransform: "uppercase",
                fontSize: "3rem",
                height: "200px",
                textShadow: "rgb(69 200 141) 3px 1px 2px"                
              }}
            >
              Build a Weather App in React
            </h2>
          </div>
          <div
            style={{
              border: "2px solid grey",
              width: "300px",
              alignItems: "center",
              borderRadius: "10px",
              display: "grid",
              backgroundColor: "rgb(27 23 23 / 80%)", // Add a semi-transparent background for readability
            }}
          >
            <Temperature temp={temp} setTemp={setTemp} />
            <h3 style={{ fontSize: "2.2rem", marginLeft: "10px" }}>Delhi</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;