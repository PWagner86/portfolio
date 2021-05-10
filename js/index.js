import Header from './components/Header.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
const app = document.querySelector(".app");
const header = new Header(app);
const projects = new Projects(app);
const skills = new Skills(app);
const about = new About(app);
