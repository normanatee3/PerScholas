import '../css/App.css';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import AuthPage from '../pages/AuthPage';
import Navbar from './Navbar';
import NewOrderPage from '../pages/NewOrderPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import { getUser } from '../utilities/users-service';


function App() {

  const [user, setUser] = useState(getUser())




  return (
    <div className="App">
      {
        user ?
          <>
            <Navbar />
            <Routes>
              <Route path="/orders/new/:id" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
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
