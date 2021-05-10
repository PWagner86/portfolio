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
            <div class="project-container container">
                <a class="project" href="https://github.com/PWagner86/livingroom_visualizer" target="_blank">Livingroom-Visualizer (Github Repo)</a>
                <a class="project" href="https://pwagner86.github.io/banner_animation_axa/" target="_blank">AXA-Banner-Animation</a>
                <a class="project" href="https://pwagner86.github.io/" target="_blank">CV</a>
            </div>
        `;
        section.innerHTML = template;
        this.app.append(section);
    }
}
