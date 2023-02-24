import './App.css';
import NavBar from './NavBar';
import About from './About';
import Altar from './AltarComponents/Altar';
import Game from './GameComponents/Game';
import Home from './Home';
import Quiz from './Quizcommponents/Quiz';
import Squatch from './SquatchComponents/Squatch';
import Timeline from './TimelineComponents/Timeline';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
        <div className="container" style={{padding: "20px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/squatch/" element={<Squatch />} />
          <Route path="/game/" element={<Game />} />
          <Route path="/altar/" element={<Altar />} />
          <Route path="/quiz/" element={<Quiz />} />
          <Route path="/timeline/" element={<Timeline />} />
          <Route path="/about/" element={<About />} />
        </Routes>
        </div>
      
      
      
    </div>
    </Router>
  );
}

export default App;
