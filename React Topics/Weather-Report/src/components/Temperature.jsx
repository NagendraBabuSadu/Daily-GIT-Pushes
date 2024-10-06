function Temperature({ temp }) {
  const tempStyle = {
    fontSize: '3em',
    fontweight: 'bold',
    fontFamily: 'sans-serif',
    color: temp === null ? 'red' : 'white'
  };

  return (
    <div>
      <h2>Temperature</h2>
      <p style={tempStyle}>
        {temp === null ? "Loading..." : `${temp} °C`}
      </p>
    </div>
  );
}
export default Temperature;
