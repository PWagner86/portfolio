export default class Header{

    public app: HTMLDivElement;

    constructor(app: HTMLDivElement){
        this.app = app;
        this.createHeader();
    }

    private createHeader(): void{
        const header: HTMLElement = document.createElement("header");
        header.classList.add("main-header");
        const template: string = `
        <div class="title-wrapper">
            <h1><span>Peter</span> Wagner</h1>
            <h2><span>Web Design</span> and Development</h2>
        </div>
        <div class="pic-wrapper">
            <div class="pic"></div>
        </div>
        `;
        header.innerHTML = template;
        this.app.append(header);
    }
}