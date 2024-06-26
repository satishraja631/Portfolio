
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SkillsPage from './Components/SkillsPage';
import ExperienceSection from './Components/Experience';
import ProjectsPage from './Components/ProjectsPage';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Router>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/skills' element={<SkillsPage/>} />
        <Route path='/experience' element={<ExperienceSection/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contactme' element={<Contact/>}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
