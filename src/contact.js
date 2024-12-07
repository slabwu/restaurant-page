export const Contact = (function() {
    const load = () => {
        const contactBody = document.createElement("div");
        contactBody.classList.add("contactbody");
        content.appendChild(contactBody);

        const headline = document.createElement("h2");
        headline.textContent = "Contact Us";
        headline.classList.add("contact");
        contactBody.appendChild(headline);
        
        const contactInformation = [
            {name: "Contact", details: ["Telephone: +60 2390 7584", "Email: catamari_restaurant@catamari.meow"]},
            {name: "Address", details: ["390 Purring Meow", "Kuching, Sarawak", "Malaysia"]},
            {name: "Hours", details: ["Monday: 10:00AM - 8:00PM", "Tuesday: 10:00AM - 8:00PM", "Wednesday: Closed for Meownovations", 
                                    "Thursday: 10:00AM - 8:00PM", "Friday: 10:00AM - 10:00PM", "Saturday: 9:00AM - 10:00PM", "Sunday: 9:00AM - 10:00PM"]}
        ]

        contactInformation.forEach((contact) => {
            const container = document.createElement("ul");
            container.classList.add("contact");
            contactBody.appendChild(container);

            const header = document.createElement("h3");
            header.textContent = `${contact.name}`;
            header.classList.add("contact");
            contactBody.appendChild(header);

            contact.details.forEach((line) => {
                const info = document.createElement("li");
                info.textContent = `${line}`;
                contactBody.appendChild(info);
                info.classList.add("contact");
            })
        });

 
    };

    return { load };
})();