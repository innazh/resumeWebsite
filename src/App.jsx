import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Hackathons from './components/Hackathons';
import DigitalOcean from './components/DigitalOcean';

function App() {
  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <NavBar/>
      <AboutMe/>
      <Education/>
      <Experience/>
      <Hackathons/>
      <Contact/>
    </div>
  );
}

export default App;
