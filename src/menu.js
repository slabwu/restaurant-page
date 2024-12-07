export const Menu = (function() {
    const load = () => {
        const menuBody = document.createElement("div");
        menuBody.classList.add("menubody");
        content.appendChild(menuBody);

        const headline = document.createElement("h2");
        headline.textContent = "Menu";
        headline.classList.add("menu");
        menuBody.appendChild(headline);

        const menuItems = [
            {name: "Crispy Catamari", description: "Squid rings fried in a layer of deliciously seasoned batter.", price: "10.00€"},
            {name: "Seafood Purrito", description: "Classic burrito filled with beans, rice, cod, and tomato salsa.", price: "15.50€"},
            {name: "Shrimp Catciatore", description: "Shrimp prepared in peppered tomato sauce and onions.", price: "13.20€"},
            {name: "Salmon Catlet", description: "Slices of salmon garnished with lemon and chive butter.", price: "17.00€"},
            {name: "Avocato Fajita", description: "Squid rings fried in a layer of deliciously seasoned batter.", price: "10.50€"},
            {name: "Surf n Meow", description: "Fillet mignon paired with red lobster and a side of asparagus.", price: "24.20€"}
        ]

        menuItems.forEach((item) => {
            const foodContainer = document.createElement("div");
            menuBody.appendChild(foodContainer);

            const foodName = document.createElement("h3");
            foodName.textContent = `${item.name}`;
            foodName.classList.add("menu");
            foodContainer.appendChild(foodName);

            const foodDescription = document.createElement("p");
            foodDescription.textContent = `${item.description}`;
            foodDescription.classList.add("menu");
            foodContainer.appendChild(foodDescription);

            const foodPrice = document.createElement("b");
            foodPrice.textContent = `${item.price}`;
            foodPrice.classList.add("menu");
            foodContainer.appendChild(foodPrice);
        }
    )
    };

    return { load };
})();