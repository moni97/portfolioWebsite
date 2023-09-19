import './styles/App.scss';
import Homepage from './pages/homepage/Homepage';
import Particle from './components/particles/Particle';
function App() {
  return (
    <div className="App">
      <Particle></Particle>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
