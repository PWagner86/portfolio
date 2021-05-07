import Header from './components/Header.js';
import Projects from './components/Projects.js';

const app = <HTMLDivElement>document.querySelector(".app");
const header: Header = new Header(app);
const section: Projects = new Projects(app);