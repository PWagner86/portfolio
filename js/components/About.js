export default class About {
    constructor(app) {
        this.app = app;
        this.createSection();
    }
    createSection() {
        const section = document.createElement("section");
        section.classList.add("section-wrapper");
        section.classList.add("about-wrapper");
        const template = `
        <h3><span>A</span>bout</h3>
        <div class="about-container container">
            <p>
            I'm currantly studying <span>WEBDESIGN AND DEVELOPTMENT</span>
            at SAE Institute Zurich. My goal is to become a <span>SOFTWARE ENGINEER</span>
            / <span>FRONTEND DEVELOPER</span> / <span>BACKEND DEVELOPER</span>.
            </p>
        </div>    
        `;
        section.innerHTML = template;
        this.app.append(section);
    }
}
