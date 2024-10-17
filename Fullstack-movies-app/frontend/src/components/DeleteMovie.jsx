export default function DeleteMovie({ movieName, _id, setMovies }) {
  function deleteMovie() {
    const encodeMovieName = encodeURIComponent(movieName);

    fetch(`http://localhost:3000/movies/${encodeMovieName}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async function (response) {
        if (!response.ok) {
          const errorText = await response.text();
          console.log(errorText);
          return;
        }
        const data = await response.json();
        if (data.msg === "Movie deleted successfully") {
          setMovies((prevMovies) =>
            prevMovies.filter(
              (movie) => movie.title !== movieName || movie._id !== _id
            )
          );
        } else {
          console.log(data.msg);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
  return <button onClick={deleteMovie}>Delete</button>;
}
