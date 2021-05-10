import Header from './components/Header.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import About from './components/About.js';

const app = document.querySelector(".app") as HTMLDivElement;
const header: Header = new Header(app);
const projects: Projects = new Projects(app);
const skills: Skills = new Skills(app);
const about: About = new About(app);