export default class Contact{
    public app: HTMLDivElement;
    

    constructor(app: HTMLDivElement){
        this.app = app;
        this.createSection();
    }

    private createSection(){
        const section = document.createElement("section") as HTMLElement;
        section.classList.add("section-wrapper");
        section.classList.add("contact-wrapper");
        const template: string = `
        <h3><span>C</span>ontact</h3>
        <div class="contact-container container">
            <ul>
                <li><a href="https://www.linkedin.com/in/peter-wagner-925a32145/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/PWagner86" target="_blank"><i class="fab fa-github"></i></a></li>
            </ul>
            <footer></footer>
        </div>    
        `;
        section.innerHTML = template;
        this.app.append(section);
    }
}