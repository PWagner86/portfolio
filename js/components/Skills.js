export default class Skills {
    constructor(app) {
        this.app = app;
        this.createSection();
    }
    createSection() {
        const section = document.createElement("section");
        section.classList.add("section-wrapper");
        section.classList.add("skills-wrapper");
        const template = `
        <h3><span>S</span>kills</h3>
        <div class="skills-container container">
            <ul>
                <li>HTML</li>
                <li>CSS / SASS</li>
                <li>JavaScript / Typescript</li>
                <li>Node.js</li>
                <li>Angular / Angular CLI (Basics)</li>
                <li>PHP</li>
                <li>MySQL</li>
            </ul>
        </div>    
        `;
        section.innerHTML = template;
        this.app.append(section);
    }
}
