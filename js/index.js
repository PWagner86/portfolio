import Header from './components/Header.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Message from './components/Message.js';
const app = document.querySelector(".app");
const header = new Header(app);
const projects = new Projects(app);
const skills = new Skills(app);
const about = new About(app);
const message = new Message(app);
const mgsBtn = document.querySelector(".msg-btn");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const text = document.querySelector(".text");
const allMessages = document.querySelector(".all-messages");
fetch('../../messages.json')
    .then(res => res.json())
    .then(data => {
    console.log(data);
    const div = document.createElement("div");
    data.messages.forEach((message) => {
        const template = `
        <strong>${message.name}, ${message.date}</strong>
        <p>${message.text}</p>
        <p>${message.email}</p>
        `;
        div.innerHTML = template;
        allMessages.append(div);
    });
});
mgsBtn.addEventListener("click", () => {
    const msg = {
        name: nameInput.value,
        date: new Date(),
        email: emailInput.value,
        text: text.value
    };
    fetch('../../messages.json', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg)
    })
        .then(() => {
        console.log("New message added");
    });
});
