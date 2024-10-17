import { useEffect, useState } from 'react'
import './App.css'
import Movies from './components/Movies';


function App() {
  
  const [movies, setMovies] = useMovies();

  return(
    <div> 
      <Movies movies={movies} setMovies={setMovies} />
    </div>
  )
}

function useMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(function () {
    fetch("http://localhost:3000/movies") 
      .then(async function (response) {
        const data = await response.json();
        setMovies(data.movies);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return  [movies, setMovies] ;
}
export default App
