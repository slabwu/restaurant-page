export const Home = (function() {
    const load = () => {
        const headline = document.createElement("h2");
        headline.textContent = "Only the best seafood a for the best felines.";
        content.appendChild(headline);

        const paragraph = document.createElement("p");
        paragraph.textContent = "Discover a world of flavour right at your toe-beans. You'll be sure to come back purr more.";
        content.appendChild(paragraph);

        const button = document.createElement("button");
        button.textContent = "Order Today";
        content.appendChild(button);
    
    };

    return { load };
})();