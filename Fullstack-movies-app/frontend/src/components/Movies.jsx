export default function Movies({ movies, setMovies }) {

    return (
        <div>
            <h1>Movies</h1>
            {movies && movies.length > 0 ? (

                movies.map(function (movie, index) {
                    if (!movie) {
                        return <p key={index}>Invalid movie data</p>;
                    }
                    return (
                        <div style={
                            {
                                display: "flex",
                                justifyContent: "space-between"
                            }
                        } key={movie._id}>
                            <h3>{movie.title}</h3>
                            <h4>{movie.year}</h4>
                            <h4>{movie.rate}</h4>
                        </div>
                    )
                })) : (
                <p>No movies</p>
            )}

        </div>
    )
}