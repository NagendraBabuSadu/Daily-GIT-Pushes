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
      console.log("hi")
      console.log(data);
      if(data.movie) {

          setMovies([...movies, data.movie]);
        }else {
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
        onChange={(e) => setAddMovie({ ...addMovie, title: e.target.value })}
      />
      <br />
      <input
        type="number"
        placeholder="Year"
        value={addMovie.year}
        onChange={(e) => setAddMovie({ ...addMovie, year: parseInt(e.target.value) })}
      />
      <br />
      <input
        type="number"
        placeholder="Rate"
        value={addMovie.rate}
        onChange={(e) => setAddMovie({ ...addMovie, rate: parseInt(e.target.value) })}
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
