import "./styles.css";

const Display = (function() {
    const content = document.getElementById("content");
    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");
    const aboutButton = document.getElementById("about");

    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "Welcome to Restaurant";
        content.appendChild(headline);
    };
    
    const clearPage = () => {
        content.replaceChildren();
    }
    
    homeButton.addEventListener("click", e => {
        clearPage()
    });

    return { load };
})();

Display.load();