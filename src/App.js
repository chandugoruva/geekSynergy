import logo from './logo.svg';
import './App.css';
import Signup from "./components/SignUp"
import Login from "./components/LoginPage"
import MoviesPage from "./components/MoviesPage"

import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return(
    <BrowserRouter>
 <Routes>
  <Route exact path="/" element={<Signup/>}/>
  <Route exact path="login" element={<Login/>}/>
  <Route exact path="/movies" element={<MoviesPage/>}/>
</Routes>
</BrowserRouter>
  )
  
}

export default App;
