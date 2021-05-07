export default class Projects{

    public app: HTMLDivElement;

    constructor(app: HTMLDivElement){
        this.app = app;
        this.createSection();
    }

    private createSection(): void{
        const section: HTMLElement = document.createElement("section");
        section.classList.add("section-wrapper");
        section.classList.add("projects-wrapper");
        const title: string = `
            <h3><span>P</span>rojekte</h3>

        `;
        section.innerHTML = title;
        this.app.append(section)
    }
}