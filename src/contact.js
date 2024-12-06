export const Contact = (function() {
    const load = () => {
    const contactInformation = [
            {name: "Contact Us", details: ["Telephone: +60 2390 7584", "Email: catamari_restaurant@catamari.meow"]},
            {name: "Address", details: ["390 Purring Meow", "Kuching, Sarawak", "Malaysia"]},
            {name: "Hours", details: ["Monday: 10:00AM - 8:00PM", "Tuesday: 10:00AM - 8:00PM", "Wednesday: Closed for Meownovations", 
                                    "Thursday: 10:00AM - 8:00PM", "Friday: 10:00AM - 10:00PM", "Saturday: 9:00AM - 10:00PM", "Sunday: 9:00AM - 10:00PM"]}
        ]

        contactInformation.forEach((contact) => {
            const container = document.createElement("div");
            content.appendChild(container);

            const header = document.createElement("h2");
            header.textContent = `${contact.name}`;
            container.appendChild(header);

            contact.details.forEach((line) => {
                const info = document.createElement("p");
                info.textContent = `${line}`;
                container.appendChild(info);
            })
        });

 
    };

    return { load };
})();