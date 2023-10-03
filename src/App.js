import logo from './logo.svg';
import './App.css';

import { Routes, Route, Navigate} from "react-router-dom"
import Home from './Views/Home';
import Profile from './Views/Profile';
import Register from './Views/Register';

function App() {

  function isLoggedIn(){
    return false;
  }

  return (
    <div className="App">
      our app

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={isLoggedIn() ? <Profile/> : <Navigate to="/register"/>} />
      </Routes>
    </div>
  );
}

export default App;
