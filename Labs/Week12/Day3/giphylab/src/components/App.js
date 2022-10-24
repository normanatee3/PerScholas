import '../css/App.css';
import { useState, useEffect } from 'react';
import Button from './Button';
import GifDisplay from './GifDisplay';
import Favorites from './Favorites';


function App() {

  const apiKey = '77WnhIztAPBCBuLG1szLLRejjG2uwNVr'
  const rating = 'pg'
  const tag = 'boxing'
  const URL = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=${rating}`
  const [gif, setGif] = useState(null)

  const getGif = async () => {
    try{
      const response = await fetch(URL)
      const data = await response.json()
      setGif(data)
    } catch (e) {
      console.error(e)
    }
  }
  const [array, setArray] = useState([])

  const pushGif = () => {
    setArray(oldArray => [...oldArray, gif])
}
const deleteGif = (e) =>{
  const title = e.target.getAttribute('title')
  setArray(array.filter(item=>item.data.title !== title))
}


  return (
    <div className="App">
      <GifDisplay gif={gif}/>
      <Button getGif={getGif}/>
      <Favorites list={array} deleteGif={deleteGif} pushGif={pushGif} gif={gif} />

    </div>
  );
}

export default App;
