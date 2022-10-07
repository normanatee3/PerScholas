import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import { length } from './models/Profile';
import { profile } from './models/Profile';
import "./style.css"



function App() {

  const [count, setCount] = useState(0)
  // eslint-disable-next-line
  const [currentProfile, setCurrentProfile] = useState(profile[count])

  const changeCount = () => {
    console.log('CurrentCount:', count);
    setCount(Math.floor(Math.random() * length))
    // change current count
    setCurrentProfile(profile[count])
    // reassign image
    
  }

  const song = () =>{
    let audio = new Audio(profile[count].song)
// audio.pause()
// audio.currentTime = 0
audio.play()
}

  return (
    <div className="App">
      <Card currentCount={count} profile={profile[count]} />
      <br></br>
      <Button picSwitch={changeCount} changeSong = {song} />


    </div>
  );
}

export default App;
