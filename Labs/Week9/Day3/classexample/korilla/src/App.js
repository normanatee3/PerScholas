import { useState } from 'react';
import './App.css';
import allReceipts from './models/receipts';
import Receipt from './components/Receipt';


function App() {
  const state = {
    receipt1: allReceipts[0],
    receipt2: allReceipts[1],
    receipt3: allReceipts[2],
  }
  return (
    <div className="App">
      <h1>Korilla Deville's Korean BBQ</h1>
      <hr/>
      <h4>All Reciepts</h4>
      <Receipt receipt={state.receipt1} />
      <Receipt receipt={state.receipt2} />
      <Receipt receipt={state.receipt3} />










    </div>
  );
}

export default App;
