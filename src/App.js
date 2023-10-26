import './styles/App.scss';
import Homepage from './pages/homepage/Homepage';
// import Particle from './components/particles/Particle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Experience from './pages/experience/Experience';
import Project from "./pages/project/Project";

function App() {
  return (
    <Router>
      {/* <Particle></Particle> */}
      <Routes>
        <Route exact path="/portfolioWebsite/" element={<Homepage/>}/>
        <Route exact path="/portfolioWebsite/experience" element={<Experience/>}/>
        <Route exact path="/portfolioWebsite/projects" element={<Project/>}/>
      </Routes>
    </Router>
  );
}

export default App;
