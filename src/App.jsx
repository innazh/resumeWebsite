import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App" style={{overflowX:'hidden'}}>
      <NavBar/>
      <AboutMe/>
      <Education/>
      <Experience/>
    </div>
  );
}

export default App;
