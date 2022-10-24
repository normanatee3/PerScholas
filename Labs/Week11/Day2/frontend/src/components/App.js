import '../App.css';
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import AuthPage from '../pages/AuthPage';
import NewOrderPage from '../pages/NewOrderPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import Navbar from './Navbar'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      {user ?
      <>
      <Navbar/>
      <Routes>
        <Route path="/orders/new/:id" element={<NewOrderPage/>}/>
        <Route path="/orders" element={<OrderHistoryPage/>}/>
      </Routes>
      </> 
      :
      <>
      <AuthPage />
      </>}
    </div>
  );
}

export default App;
