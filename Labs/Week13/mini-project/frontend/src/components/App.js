import '../css/App.css';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import AuthPage from '../pages/AuthPage';
import Navbar from './Navbar';
import { getUser } from '../utilities/users-service';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import axios from 'axios'


function App() {

  const [user, setUser] = useState(getUser())
  const [movies, setMovies] = useState(null)
  const [genre, setGenre] = useState('Action')
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {
      info: 'base_info',
      limit: '10',
      page: '1',
      titleType: 'movie',
      genre: genre,
      startYear: '1970',
      endYear: '2022'
    },
    headers: {
      'X-RapidAPI-Key': '2c086d263emsh94679314f8a1dd9p123a19jsnd5092b9aa43c',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  const getMovies = () => {
    axios.request(options).then(function (response) {
      // console.log(response.data);
      const movieList = response.data
      setMovies( movieList )
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(()=>{
    getMovies()
  }, [])



  return (
    <div className="App">
      {
        user ?
          <>
            <Navbar user={user} getMovies={getMovies} />
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage movies={movies} getMovies={getMovies} />} />
            </Routes>
          </>
          :
          <>
            <AuthPage setUser={setUser} />
          </>
      }
    </div>
  );
}

export default App;
