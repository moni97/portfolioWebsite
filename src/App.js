import './styles/App.scss';
import Homepage from './pages/homepage/Homepage';
// import Particle from './components/particles/Particle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Experience from './pages/experience/Experience';

function App() {
  return (
    <Router>
      {/* <Particle></Particle> */}
      <Routes>
        <Route path="/portfolioWebsite/" element={<Homepage/>}/>
        <Route path="/portfolioWebsite/experience" element={<Experience/>}/>
      </Routes>
    </Router>
  );
}

export default App;
