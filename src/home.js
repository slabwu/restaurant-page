export const Home = (function() {
    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "HOME";
        content.appendChild(headline);
    };

    return { load };
})();