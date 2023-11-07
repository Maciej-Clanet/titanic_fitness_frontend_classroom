import logo from './logo.svg';
import './App.css';

import { Routes, Route, Navigate} from "react-router-dom"
import Home from './Views/Home';
import Profile from './Views/Profile';
import Register from './Views/Register';
import Workouts from './Views/Workouts';
import Header from './Components/Header/Header';
import Article from './Views/Article';

import { useContext } from 'react';
import { AuthContext } from './Components/AuthContext';

function App() {
  const {token} = useContext(AuthContext)
  function isLoggedIn(){
    if(token){
      return true
    }
    return false
  }

  return (
    <div className="App">
      <Header/>
      <div className="page-container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={isLoggedIn() ? <Profile/> : <Navigate to="/register"/>} />
          <Route path="/article/:article_id" element={<Article/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
