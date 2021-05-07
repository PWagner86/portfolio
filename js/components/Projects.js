export default class Projects {
    constructor(app) {
        this.app = app;
        this.createSection();
    }
    createSection() {
        const section = document.createElement("section");
        section.classList.add("section-wrapper");
        section.classList.add("projects-wrapper");
        const template = `
            <h3><span>P</span>rojekte</h3>

        `;
        section.innerHTML = template;
        this.app.append(section);
    }
}
