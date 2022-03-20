import './App.css';

import Header from './components/Header/Header';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';

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
      
        <main className="">
          <h1>Albin Paul</h1>
          <p class="lead">I am a Full Stack Software Engineer. 
          I have 4 years of total work experience. I have worked 3 years as a Software Engineer and 1 year as a
DevOps Engineer. My primary toolset is in C++, Java, SQL and Python. In my spare time, I love
contributing back to the community via Stackoverflow.</p>
        </main>  
        {
          content.map(section => section.content)
        }
      
     </div>
      
  );
}

export default App;
