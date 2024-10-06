import { useEffect, useState } from "react";

function City({ city, setCity, setTemp }) {
  const [inputCity, setInputCity] = useState("");

  async function changeCity() {
    const response = await fetch(
      `https://api.weatherstack.com/current?access_key=f43c6e0daa1e7cdad89075d2893e2b5c&query=${inputCity}`
    );
    const data = await response.json();
    setTemp(data.current.temperature);
    setCity(data.location.name);
    console.log(data.location.name);
    console.log(data.current.temperature);
    setInputCity("");
  }

  const divStyle = {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "24px",
    boxShadow:
      " rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0",
    color: "#3c4043",
    padding: "8px 16px",
  };
  return (
    <div>
      <input
        style={divStyle}
        id="inputCity"
        type="text"
        placeholder="City"
        value={inputCity}
        onInput={(e) => {
          setInputCity(e.target.value);
        }}
      />{" "}
      <span></span>
      <button
        style={{
          ...divStyle,
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={changeCity}
      >
        Search
      </button>
      <h2>{city}</h2>
    </div>
  );
}

export default City;
