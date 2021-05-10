export default class Skills{

    public app: HTMLDivElement;

    constructor(app: HTMLDivElement){
        this.app = app;
        this.createSection();
    }

    private createSection(): void{
        const section = document.createElement("section") as HTMLElement;
        section.classList.add("section-wrapper");
        section.classList.add("skills-wrapper");
        const template: string = `
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