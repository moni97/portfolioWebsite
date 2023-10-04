import './styles/App.scss';
import Homepage from './pages/homepage/Homepage';
import Education from './pages/education/Education';
import Particle from './components/particles/Particle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Particle></Particle>
      <Routes>
        <Route path="/portfolioWebsite/" element={<Homepage/>}/>
        <Route path="/portfolioWebsite/education" element={<Education/>}/>
      </Routes>
    </Router>
  );
}

export default App;
