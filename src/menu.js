export const Menu = (function() {
    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "Menu";
        content.appendChild(headline);
    };

    return { load };
})();