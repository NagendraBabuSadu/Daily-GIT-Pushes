import DeleteMovie from ".//DeleteMovie";
import EditMovie from "./EditMovie";
import AddMovie from "./AddMovie";
import { useState } from "react";

export default function Movies({ movies, setMovies }) {
  const [editingMovie, setEditingMovie] = useState(null);

  function handleEditClick(movie) {
    setEditingMovie(movie);
  }

  function handleEditClose() {
    setEditingMovie(null);
  }

  return (
    <div>
      <h1>Movies</h1>
      {!editingMovie && <AddMovie movies={movies} setMovies={setMovies} />}
      {movies && movies.length >= 0 && editingMovie && (
        <EditMovie
          movie={editingMovie}
          movies={movies}
          setMovies={setMovies}
          onClose={handleEditClose}
        />
      )}
      {movies && movies.length >= 0 ? (
        movies.map(function (movie, index) {
          if (!movie) {
            return <p key={index}>Invalid movie data</p>;
          }
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                padding: "10px",
                margin: "3px",
              }}
              key={movie._id}
            >
              <h3>{movie.title}</h3>
              <h4>{movie.year}</h4>
              <h4>{movie.rate}</h4>
              <h4>{movie.image}</h4>
              <button onClick={() => handleEditClick(movie)}>Edit</button>

              <DeleteMovie
                movieName={movie.title}
                _id={movie._id}
                setMovies={setMovies}
              />
            </div>
          );
        })
      ) : (
        <p>No movies</p>
      )}
    </div>
  );
}
