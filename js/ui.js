// =================================================
// USER INTERFACE MODULE
// Responsible for displaying plant data on the page
// =================================================


// Defines a function that renders a list of plants inside a target container
export function renderPlantList(plants, container) {

    // Clears any existing content inside the container before rendering new data
    container.innerHTML = "";

    // Loops through each plant object in the provided plant list
    plants.forEach(plant => {

        // Creates a new HTML div element that will represent one plant card
        const card = document.createElement("div");

        // Assigns a CSS class so the card can be styled by the stylesheet
        card.className = "card";

        // Inserts plant information into the card using template literals
        card.innerHTML = `
        <h3>${plant.name}</h3>
        <p>Water: ${plant.water}</p>
        <p>Sun: ${plant.sun}</p>
        `;

        // Appends the newly created card to the container element in the DOM
        container.appendChild(card);

    });

}


// Defines a function that displays a message inside a container
export function showMessage(container, message) {

    // Updates the container HTML with a simple paragraph message
    container.innerHTML = `<p>${message}</p>`;

}


// Defines a function that clears the contents of a container
export function clearContainer(container) {

    // Removes all inner HTML from the container
    container.innerHTML = "";

}