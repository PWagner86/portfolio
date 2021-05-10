export default class About{

    public app: HTMLDivElement;

    constructor(app: HTMLDivElement){
        this.app = app;
        this.createSection();
    }

    private createSection(){
        const section = document.createElement("section") as HTMLElement;
        section.classList.add("section-wrapper");
        section.classList.add("about-wrapper");
        const template: string = `
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