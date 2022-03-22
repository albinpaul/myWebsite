import './App.css';

import Header from './components/Header/Header';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';

import Intro from './components/intro/intro';
function App() {
  let content = [
    {
      "label" : "Work Experience",
      "id": "workexperience",
      "content": <WorkExperience/>
    },
    {
      "label" : "Certificates",
      "id": "certificates",
      "content": <Certificates/>
    },
    {
      "label" : "Projects",
      "id": "projects",
      "content": <Projects/>
    },
    {
      "label" : "Education",
      "id": "educations",
      "content": <Education/>
    },
    {
      "label" : "Achievements",
      "id": "achievements",
      "content": <Achievements/>
    },
  ]
  let header = content.map(section => ({ "id": section.id, "label": section.label}))
  return (
 
      <div class="">
        <Header header={header}></Header>
        <Intro/>
        {
          content.map(section => section.content)
        }
      
     </div>
      
  );
}

export default App;
