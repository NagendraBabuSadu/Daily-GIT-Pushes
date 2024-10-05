import { useState, useEffect } from "react";

function Temperature() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&hourly=temperature_2m"
      );
      const data = await response.json();
      const list = await data.hourly.temperature_2m;
      console.log(list);

      if (list.length === 0) {
        console.log("No data available");
        setTemp("No data available");
        return;
      }

      let index = 0;
      let newTemp = setTemp(list[index]);

      const intervalId = setInterval(() => {
        index++;
        if (index < list.length) {
          setTemp(list[index]);
          console.log(list[index]);
        } else {
          clearInterval(intervalId);
        }
      }, 60 * 1000);
    };
    fetchWeather();
  }, [setTemp]);

  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1rem",
        textShadow: "rgb(12 123 141) 3px 1px 2px",
      }}
    >
      <h2>Temperature</h2> <span></span>
      {temp === null ? (
        <h2>Loading...</h2>
      ) : (
        <h2 style={{ fontSize: "2.8rem" }}>{temp}°C</h2>
      )}
    </div>
  );
}

export default Temperature;
