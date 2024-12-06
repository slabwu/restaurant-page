import "./styles.css";

const loadPage = (function() {
    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Restaurant";
    content.appendChild(headline);
})();