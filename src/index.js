import "./styles.css";

const Display = (function() {
    const content = document.getElementById("content");

    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", e => {
        clearPage()
    });

    const menuButton = document.getElementById("menu");
    menuButton.addEventListener("click", e => {
        clearPage()
    });

    const aboutButton = document.getElementById("about");
    aboutButton.addEventListener("click", e => {
        clearPage()
    });

    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "Welcome to Restaurant";
        content.appendChild(headline);
    };
    
    const clearPage = () => {
        content.replaceChildren();
    }

    load();
})();