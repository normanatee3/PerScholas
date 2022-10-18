// import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// Add the following import
import { getUser } from './utilities/users-service';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';


function App() {

  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
      <>
      <NavBar setUser={setUser} user={user} />
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
