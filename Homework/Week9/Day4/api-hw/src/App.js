import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import GameDisplay from './components/GameDisplay';



function App() {

  const apiKey = '0def1faa9dcb4d288f16af5d7fb90af7'
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2c086d263emsh94679314f8a1dd9p123a19jsnd5092b9aa43c',
      'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    }
  };
  // state to hold game data
  const [games, setGames] = useState(null)
  const [page, setPage] = useState(1)
  // fetch game
  const getGame = async (fixedPage) => {
    const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=${apiKey}&page=${fixedPage}`;
    try {
      // make fetch request and store response
      const response = await fetch(url, options);
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the game state to the game
      setGames(data);
      setPage(parseInt(fixedPage))
    } catch (e) {
      console.error(e)
    }
  };
  const NextGame = async () => {
    let nextPage = page + 1
    if(page < 40477){
      setPage(page + 1)
    }else{
      setPage(1)
      nextPage = 1
    }
    const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=${apiKey}&page=${nextPage}`;
    try {
      // make fetch request and store response
      const response = await fetch(url, options);
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the game state to the game
      setGames(data);
    } catch (e) {
      console.error(e)
    }
  };
  const lastGame = async () => {
    let lastPage = page - 1
    if(page > 1){
      setPage(page - 1)
    }else{
      setPage(40477)
      lastPage = 40477
    }
    const url = `https://rawg-video-games-database.p.rapidapi.com/games?key=${apiKey}&page=${lastPage}`;
    try {
      // make fetch request and store response
      const response = await fetch(url, options);
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the game state to the game
      setGames(data);
    } catch (e) {
      console.error(e)
    }
  };

  useEffect(() => {
    getGame(Math.floor(Math.random()*40));
  }, []);

  return (
    <div className="App">
      
      <Form page={page} gameSearch={getGame} nextGame={NextGame} lastGame={lastGame} />
      <GameDisplay games={games} />



    </div>
  );
}

export default App;
