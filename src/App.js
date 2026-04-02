import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import About from './Components/About';
import Game from './Components/Game';
import {Routes,Route, HashRouter} from 'react-router-dom'
import Nav from './Components/Nav';
import Home from './Components/Home';
import Requirements from './Components/Requirements';
import Team from './Components/Team';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/requirements' element={<Requirements/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
