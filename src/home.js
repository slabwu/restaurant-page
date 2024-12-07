export const Home = (function() {
    const load = () => {
        const homeBody = document.createElement("div");
        homeBody.classList.add("homebody");
        content.appendChild(homeBody);
        const textBody = document.createElement("div");
        textBody.classList.add("hometext");
        homeBody.appendChild(textBody);
        const imageBody = document.createElement("div");
        imageBody.classList.add("homeimg");
        homeBody.appendChild(imageBody);


        const headline = document.createElement("h2");
        headline.classList.add("home");
        headline.textContent = "Only the best seafood for the best of felines.";
        textBody.appendChild(headline);

        const paragraph = document.createElement("p");
        paragraph.classList.add("home");
        paragraph.textContent = "Discover a world of flavour beneath at your toe-beans. You'll be sure to come back purr more.";
        textBody.appendChild(paragraph);

        const button = document.createElement("button");
        button.classList.add("home");
        button.textContent = "Order .Today";
        textBody.appendChild(button);
        button.addEventListener("click", e => {
            Display.clearPage();
            Menu.load();
            Display.changeContext("menu");
        });    
    
        const image = document.createElement("img");
        image.classList.add("home");
        image.src = cat;
        imageBody.appendChild(image);
    };

    return { load };
})();

import cat from "./assets/cat.jpg";
import { Display } from "./index.js";
import { Menu } from "./menu.js";