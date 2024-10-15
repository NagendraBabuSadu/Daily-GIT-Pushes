import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddMovie from './components/AddMovie';
import Movies from './components/Movies';


function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(async function(response) {
        const data = await response.json();
        console.log(data.movies)
        setMovies(data.movies)
      })
    
    }, [])


  return(
    <div>
      <AddMovie movies={movies} setMovies={setMovies} />
      <Movies movies={movies} setMovies={setMovies} />
    </div>
  )
}
export default App
