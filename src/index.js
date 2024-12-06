import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

const Display = (function() {
    const content = document.getElementById("content");
    Home.load();

    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", e => {
        clearPage();
        Home.load();
    });

    const menuButton = document.getElementById("menu");
    menuButton.addEventListener("click", e => {
        clearPage();
        Menu.load();
    });

    const aboutButton = document.getElementById("about");
    aboutButton.addEventListener("click", e => {
        clearPage();
        About.load();
    });


    
    const clearPage = () => {
        content.replaceChildren();
    }
})();