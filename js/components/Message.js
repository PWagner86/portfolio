export default class Message {
    constructor(app) {
        this.app = app;
        this.createSection();
    }
    createSection() {
        const section = document.createElement("section");
        section.classList.add("section-wrapper");
        section.classList.add("message-wrapper");
        const template = `
        <h3><span>M</span>essage</h3>
        <div class="message-container container">
            <div class="messages">
                <h4>Messages:</h4>
                <div class="all-messages">

                </div>
            </div>
            <form>
                <h4>Leave a Message</h4>
                <label for="name">
                    Name:
                    <input class="name" type="text" name="name" required>
                </label>
                <label for="email">
                    Email:
                    <input class="email" type="email" name="email" required>
                </label>
                <label for="message">
                    Your message:
                    <textarea class="text" name="message" required></textarea>
                </label>
                <input class="msg-btn" type="submit" value="Submit">
            </form>
        </div>    
        `;
        section.innerHTML = template;
        this.app.append(section);
    }
}
