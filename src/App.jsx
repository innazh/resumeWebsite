import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <NavBar/>
      <AboutMe/>
      <Education/>
      <Experience/>
      <UnderConstruction/>
    </div>
  );
}

export default App;
