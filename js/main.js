//=============================================
// MAIN JAVASCRIPT FILE - this file is responsible for handling user interactions, displaying saved garden plans, and connecting the design and API modules together
// Controls page interactions and starting the application
//==============================================

// Imports data-loading functions from the plants module
import { loadFoodPlants, loadFlowers, loadFencing } from './plants.js';


// Writes a message to the browser console confirming the script loaded
console.log("Garden Design Planner Loaded");


// Gets the Food Garden button from the HTML page by its ID so JavaScript can interact with it
const foodBtn = document.getElementById("foodSectionBtn");

// Gets the Flower Garden button from the HTML page by its ID
const flowerBtn = document.getElementById("flowerSectionBtn");

// Gets the Fencing button from the HTML page by its ID
const fenceBtn = document.getElementById("fenceSectionBtn");


// Checks if the Food Garden button exists before attaching an event listener
if (foodBtn) {

    // Listens for a click event on the Food Garden button
    foodBtn.addEventListener("click", () => {

        // Displays a simple message to the user when the button is clicked
        window.location.href = "food.html";

    });

}


// Checks if the Flower Garden button exists before attaching interaction logic
if (flowerBtn) {

    // Listens for click events on the Flower button
    flowerBtn.addEventListener("click", () => {

        // Shows a message to the user indicating the feature will be added soon
        window.location.href = "flowers.html";

    });

}


// Checks if the Fencing button exists before attaching logic
if (fenceBtn) {

    // Listens for click events on the Fencing button
    fenceBtn.addEventListener("click", () => {

        // Displays a temporary placeholder message
        window.location.href = "fencing.html";

    });

}


// Retrieves the container element where saved garden plants will be displayed
const gardenContainer = document.getElementById("gardenContainer");
if (gardenContainer) {
    displaySavedGarden();
}

// Defines a function responsible for displaying saved garden items from localStorage
function displaySavedGarden() {

    const gardenContainer = document.getElementById("gardenContainer");
    if (!gardenContainer) return;
    // Retrieves the saved garden plan from browser localStorage and converts it from JSON text into an object
    const savedGarden = JSON.parse(localStorage.getItem("gardenPlan")) || [];

    // Checks whether the saved garden list is empty
    if (savedGarden.length === 0) {

        // Updates the HTML container to show a message if no plants are saved
        gardenContainer.innerHTML = "<p>No plants saved yet.</p>";

        // Stops the function since there is nothing to display
        return;

    }

    // Clears any existing content from the container before displaying items
    gardenContainer.innerHTML = "";

    // Loops through each plant stored in the saved garden array
    savedGarden.forEach(plant => {

        // Creates a new HTML div element that will hold plant information
        const plantCard = document.createElement("div");

        // Inserts plant data into the div using template literals
        plantCard.innerHTML = `
        <strong>${plant.name}</strong>
        ${plant.water ? `<p>Water: ${plant.water}</p>` : ''}
        ${plant.sun ? `<p>Sun: ${plant.sun}</p>` : ''}
        ${plant.material ? `<p>Material: ${plant.material}</p>` : ''}
        <button class="removePlantBtn">Remove</button>`;

        // Appends the newly created plant card to the garden container on the page
        const removeBtn = plantCard.querySelector(".removePlantBtn");
        removeBtn.addEventListener("click", () => {
            let garden = JSON.parse(localStorage.getItem("gardenPlan")) || [];
            garden = garden.filter(p => p.name !== plant.name);
            localStorage.setItem("gardenPlan", JSON.stringify(garden));
            displaySavedGarden();
        });
        plantCard.classList.add("plantCard");
        gardenContainer.appendChild(plantCard);

    });

}


// Calls the function that loads and displays any saved garden data when the page first loads
displaySavedGarden();

// Retrieves the container element where plant cards will be displayed
const plantContainer = document.getElementById("plantContainer");

// Loads and displays food plants if on food.html
if (window.location.pathname.includes("food.html") && plantContainer) {
    loadFoodPlants().then(plants => {
        plantContainer.innerHTML = "";
        plants.forEach(plant => {
            const card = document.createElement("div");
            card.classList.add("plantCard");
            card.innerHTML = `
                <img src="${plant.image || 'images/placeholder.jpg'}" alt="${plant.name}" class="plantImg">
                <h3>${plant.name}</h3>
                <p>Sun: ${plant.sun}</p>
                <p>Water: ${plant.water}</p>
                <p>Spacing: ${plant.spacing || ''}</p>
                <button class="addPlantBtn">Add to Garden</button>`;
            const button = card.querySelector(".addPlantBtn");
            button.addEventListener("click", () => {
                let garden = JSON.parse(localStorage.getItem("gardenPlan")) || [];
                garden.push(plant);
                localStorage.setItem("gardenPlan", JSON.stringify(garden));
                button.textContent = "Added!";
                setTimeout(() => { button.textContent = "Add to Garden"; }, 1500);
                displaySavedGarden();
            });
            plantContainer.appendChild(card);
        });
    });
}

// Loads and displays flower plants if on flowers.html
if (window.location.pathname.includes("flowers.html") && plantContainer) {
    loadFlowers().then(data => {
        const container = document.getElementById("plantContainer");
        container.innerHTML = "";
        data.forEach(plant => {
            const card = document.createElement("div");
            card.classList.add("plantCard");
            card.innerHTML = `
                <img src="${plant.image || 'images/placeholder.jpg'}" alt="${plant.name}" class="plantImg">
                <h3>${plant.name}</h3>
                <p>Sun: ${plant.sun}</p>
                <p>Water: ${plant.water}</p>
                <button class="addPlantBtn">Add to Garden</button>`;
            const button = card.querySelector(".addPlantBtn");
            button.addEventListener("click", () => {
                let garden = JSON.parse(localStorage.getItem("gardenPlan")) || [];
                garden.push(plant);
                localStorage.setItem("gardenPlan", JSON.stringify(garden));
                button.textContent = "Added!";
                setTimeout(() => { button.textContent = "Add to Garden"; }, 1500);
                displaySavedGarden();
            });
            container.appendChild(card);
        });
    });
}

if (window.location.pathname.includes("fencing.html")) {
    loadFencing().then(items => {
        const container = document.getElementById("fenceContainer");
        if (!container) return;
        container.innerHTML = "";
        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("plantCard");
            card.innerHTML = `
                <h3>${item.name}</h3>
                <p><strong>Material:</strong> ${item.material}</p>
                <p><strong>Purpose:</strong> ${item.purpose}</p>
                <p><strong>Height:</strong> ${item.height}</p>
                <p><strong>Best Use:</strong> ${item.bestUse}</p>
                <p><strong>Maintenance:</strong> ${item.maintenance}</p>
                <button class="addPlantBtn">Add to Plan</button>`;
            const button = card.querySelector(".addPlantBtn");
            button.addEventListener("click", () => {
                let garden = JSON.parse(localStorage.getItem("gardenPlan")) || [];
                garden.push(item);
                localStorage.setItem("gardenPlan", JSON.stringify(garden));
                button.textContent = "Added!";
                setTimeout(() => { button.textContent = "Add to Plan"; }, 1500);
            });
            container.appendChild(card);
        });
    });
}