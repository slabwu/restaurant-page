export const Contact = (function() {
    const load = () => {
        const headline = document.createElement("h1");
        headline.textContent = "Contact Us";
        content.appendChild(headline);


        const hoursHeader = document.createElement("p");
        hoursHeader.textContent = "Mon-Fri 10am-10pm";
        content.appendChild(hoursHeader);

        const hours = document.createElement("p");
        hours.textContent = "Mon-Fri 10am-10pm";
        content.appendChild(hours);
    };

    return { load };
})();