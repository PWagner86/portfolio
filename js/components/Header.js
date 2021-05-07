export default class Header {
    constructor(app) {
        this.app = app;
        this.createHeader();
    }
    createHeader() {
        const header = document.createElement("header");
        header.classList.add("main-header");
        const template = `
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
