import Navbar from "./components/navbar/navbar";
import About from "./components/About/about";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Achievements from "./components/achievements/achievements";
import Certifications from "./components/certifications/certifications";

import './App.css'
import Project from './components/Project/Project';

function App() {
  

  return (
    <>
      <div>
        <div className="absolute  -z-50 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div  >
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
        <Footer />

          
        </div>

      </div>
    
    </>
  )
}

export default App
