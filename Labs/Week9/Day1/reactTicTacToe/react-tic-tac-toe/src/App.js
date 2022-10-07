import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';
import "./style.css"

function App() {
  return (
    <div className="App">

      <Header />

      <div className=''>
        <Player whichPlayer="X" />


      </div>

      <div className=''>
        <Player whichPlayer="O" />


      </div>

      <Board />


    </div>
  );
}

export default App;
