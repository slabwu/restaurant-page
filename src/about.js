export const About = (function() {
    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "ABOUT";
        content.appendChild(headline);
    };

    return { load };
})();