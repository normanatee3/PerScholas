import './App.css';
import { useState } from 'react';
import Card from "./components/Card.jsx"
import Button from "./components/Button.jsx"
import cardImages from './models/cardImage';
import symbols from './models/symbols';
import "./style.css"

function App() {

// --------------useState( )

const [count , setCount] = useState(0)

const [currentPic, setCurrentPic] = useState(cardImages[count])


const changeCount = () =>{
  console.log('CurrentCount:', count);
  setCount(count + 1)
  // change current count
  setCurrentPic(cardImages[count])
  // reassign image
}
const reverseCount = () =>{
  console.log('CurrentCount:', count);
  setCount(count - 1)
  // change current count
  setCurrentPic(cardImages[count])
  // reassign image
}


  return (
    <div className="App">
      
      <Card currentCount = {count} images = {cardImages[count]}/>

      <Button symbol = {symbols.left} picSwitch = {reverseCount} />
      <Button symbol = {symbols.right} picSwitch = {changeCount} />




    </div>
  );
}

export default App;
