import { useEffect, useState } from "react";
import joker from "../images/joker.webp";

export default function AddMovie({ movies, setMovies }) {
  const [addMovie, setAddMovie] = useState({
    title: "",
    year: "",
    rate: "",
    image: "",
  });
  const [showImage, setShowImage] = useState(false);

  function movieAdded() {
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addMovie),
    }).then(async function (response) {
      const data = await response.json();
      console.log(data);
      if (data.movie) {
        setMovies((prevMovies) => [...prevMovies, data.movie]);
        setAddMovie({title: "", year: "", rate: "", image: ""});
      } else {
        console.log(data.msg);
      }
    });
  }

  return (
    <div>
      <h1>Add Movie</h1>
      <input
        type="text"
        placeholder="Title"
        value={addMovie.title}
        // handleChange(e)={this.AddMovie({[e.target.title]: e.target.value})}
        onChange={(e) => setAddMovie({...addMovie, title: e.target.value})}
      />
      <br />
      <input
        type="number"
        placeholder="Year"
        value={addMovie.year}
        onChange={(e) => {
          const yearValue = parseInt(e.target.value, 10);
          setAddMovie({ ...addMovie, year: isNaN(yearValue) ? "" : yearValue });
        }}
      />
      <br />
      <input
        type="number"
        placeholder="Rate"
        value={addMovie.rate}
        onChange={(e) => {
          const rateValue = parseFloat(e.target.value);
          setAddMovie({ ...addMovie, rate: isNaN(rateValue) ? "" : rateValue });
        }}
      />
      <br />
      <input
        type="text"
        placeholder="image"
        value={addMovie.image}
        onChange={(e) => setAddMovie({ ...addMovie, image: e.target.value })}
      />
      <br />
      {showImage ? (
        <img
          style={{
            width: "200px",
            height: "200px",
          }}
          srcSet={joker}
          alt="joker"
        />
      ) : null}
      <button onClick={movieAdded}>Add Movie</button>
    </div>
  );
}
