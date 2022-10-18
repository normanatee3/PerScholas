import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import WishList from './components/WishList';

function App() {
  // api key
  const apiKey = "b61635f4"
  // state to hold movie data
  const [movie, setMovie] = useState(null)
  // fetch movie
  const getMovie = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`

      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (e) {
      console.error(e)
    }
  };
  
  const randomMovie = [
    "Pulp Fiction", "Taxidermia", "There Will Be Blood", "The Godfather", "The Shawshank Redemption", "The Dark Knight", "Schindler's List", "Snakes on a Plane", "Three Days of the Condor", "Kill Bill", "Jumanji"
  ]
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie(randomMovie[Math.floor(Math.random()*randomMovie.length)]);
  }, []);

  const [array, setArray] = useState([])

  const pushMovie = () => {
    setArray(oldArray => [...oldArray, movie])
}
const deleteMovie = (e) =>{
  const title = e.target.getAttribute('title')
  setArray(array.filter(item=>item.Title !== title))
}

  return (
    <div className="App">
      <div className="movieBar">

      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
      </div>
      <WishList list={array} deleteMovie={deleteMovie} pushMovie = {pushMovie} movie={movie} />



    </div>
  );
}

export default App;
