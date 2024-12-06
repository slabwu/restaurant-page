import "./styles.css";

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

const loadPage = () => {
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Restaurant";
    content.appendChild(headline);
};

loadPage();
