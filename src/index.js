import "./styles.css";
import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

const Display = (function() {
    const content = document.getElementById("content");
    let context = "home";
    Home.load();

    const homeButton = document.getElementById("home");
    homeButton.addEventListener("click", e => {
        if (context !== "home") {
            clearPage();
            Home.load();
            context = 'home';
        };
    });

    const menuButton = document.getElementById("menu");
    menuButton.addEventListener("click", e => {
        if (context !== "menu") {
            clearPage();
            Menu.load();
            context = 'menu';
        };
    });

    const aboutButton = document.getElementById("about");
    aboutButton.addEventListener("click", e => {
        if (context !== "about") {
            clearPage();
            About.load();
            context = 'about';
        };
    });


    
    const clearPage = () => {
        content.replaceChildren();
    }
})();