export const About = (function() {
    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "Contact Us";
        content.appendChild(headline);

        const hours = document.createElement("p");
        hours.textContent = "Mon-Fri 10am-10pm";
        content.appendChild(hours);
    };

    return { load };
})();