import "./styles.css";

const Display = (function() {
    const content = document.getElementById("content");
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const about = document.getElementById("about");

    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "Welcome to Restaurant";
        content.appendChild(headline);
    };
    
    const clearPage = () => {
        content.innerHTML = '';
    }
    
    home.addEventListener("click", clearPage());
    
    return { load };
})();

Display.load();