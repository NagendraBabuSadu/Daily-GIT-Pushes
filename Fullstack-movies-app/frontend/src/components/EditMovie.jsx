import { useState } from "react";

export default function EditMovie({ movie, setMovies, onClose }) {
  const [updatedMovie, setUpdatedMovie] = useState({
    title: movie.title,
    year: movie.year,
    image: movie.image,
    rate: movie.rate,
  });

    function handleChange(event) {
        const {name,  value} = event.target;
        setUpdatedMovie({...updatedMovie, [name]: value});
    }
  function saveMovie() {
    const encodeMovieName = encodeURIComponent(movie.title);
    fetch(`http://localhost:3000/movies/${encodeMovieName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie)
    })
      .then(async function (response) {
        if (!response.ok) {
          const errorText = await response.text();
          console.log(errorText);
          return;
        }
        const data = await response.json();
        if (data.msg === "Movie updated successfully") {
          setMovies((prevMovies) => {
            return prevMovies.map((prevMovie) => {
              if (prevMovie.title === movie.title || prevMovie.year === movie.year) {
                return {...prevMovie, ...updatedMovie}
              }
              return prevMovie;
            });
          });
        } else {
          console.log(data.msg);
        }
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }
  return (

    <div>
        <h1>Edit Movie</h1>
        <input 
            type="text"
            name="title"
            value={updatedMovie.title}
            onChange={handleChange}
            /> <br />
        <input 
            type="number"
            name="year"
            value={updatedMovie.year}
            onChange={handleChange}
            /> <br />
        <input 
            type="number"
            name="rate"
            value={updatedMovie.rate}
            onChange={handleChange}
            /> <br />
        <input 
            type="text"
            name="image"
            value={updatedMovie.image}
            onChange={handleChange}
            /> <br />
    <button onClick={saveMovie}>Save</button>
    <button onClick={onClose}>Close</button>
    </div>

  ) 
}
