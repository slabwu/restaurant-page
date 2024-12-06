export const Home = (function() {
    const load = () => {
        const headline = document.createElement("h2");
        headline.textContent = "Only the best seafood a for the best felines.";
        content.appendChild(headline);

        const button = document.createElement("button");
        button.textContent = "Order Today";
        content.appendChild(button);
    
    };

    return { load };
})();