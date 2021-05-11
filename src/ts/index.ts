import Header from './components/Header.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Message from './components/Message.js';

const app = document.querySelector(".app") as HTMLDivElement;
const header: Header = new Header(app);
const projects: Projects = new Projects(app);
const skills: Skills = new Skills(app);
const about: About = new About(app);
const message: Message = new Message(app);

const mgsBtn = document.querySelector(".msg-btn") as HTMLInputElement;
const nameInput = document.querySelector(".name") as HTMLInputElement;
const emailInput = document.querySelector(".email") as HTMLInputElement;
const text = document.querySelector(".text") as HTMLTextAreaElement;
const allMessages = document.querySelector(".all-messages") as HTMLDivElement;

fetch('../messages.json')
.then(res => res.json())
.then(data => {
    console.log(data);
    data.messages.forEach((message: any) => {
        const div = document.createElement("div") as HTMLDivElement;
        const template: string = `
        <strong>${message.name}, ${message.date}</strong>
        <p>${message.text}</p>
        <p>${message.email}</p>
        `;
        div.innerHTML = template;
        allMessages.append(div);
    })
})

mgsBtn.addEventListener("click", () => {

    const msg: object = {
        name: nameInput.value,
        date: new Date(),
        email: emailInput.value,
        text: text.value
    }
    
    fetch('../../messages.json', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(msg)
    })
    .then(() => {
        console.log("New message added");
    })
})