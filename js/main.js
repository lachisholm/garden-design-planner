//=============================================
// MAIN JAVASCRIPT FILE - this file is responsible for handling user interactions, displaying saved garden plans, and connecting the design and API modules together
// Controls page interactions and starting the application
//==============================================





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


// Defines a function responsible for displaying saved garden items from localStorage
function displaySavedGarden() {

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
        <img src="${plant.image}" alt="${plant.name}" class="plantImg">
        <h3>${plant.name}</h3>
        <p>Sun: ${plant.sun}</p>
        <p>Water: ${plant.water}</p>
        <p>Spacing: ${plant.spacing || ''}</p>
        <button class="addPlantBtn">Add to Garden</button>`;

        // Appends the newly created plant card to the garden container on the page
        plantCard.classList.add("plantCard");
        gardenContainer.appendChild(plantCard);

    });

}


// Calls the function that loads and displays any saved garden data when the page first loads
displaySavedGarden();

// Debug: Display each food plant name in the #plantContainer
if (window.location.pathname.includes("food.html")) {
    loadFoodPlants().then(plants => {
        const container = document.getElementById("plantContainer");
        plants.forEach(plant => {
            const card = document.createElement("div");
            card.classList.add("plantCard");
            card.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}" class="plantImg">
                <h3>${plant.name}</h3>
                <p>Sun: ${plant.sun}</p>
                <p>Water: ${plant.water}</p>
                <p>Spacing: ${plant.spacing || ''}</p>
                <button class="addPlantBtn">Add to Garden</button>
            `;
            const button = card.querySelector(".addPlantBtn");
            button.addEventListener("click", () => {
                let garden = JSON.parse(localStorage.getItem("gardenPlan")) || [];
                garden.push(plant);
                localStorage.setItem("gardenPlan", JSON.stringify(garden));
                displaySavedGarden();
            });
            container.appendChild(card);
        });
    });
}

if (window.location.pathname.includes("flowers.html")) {
    loadFlowers().then(plants => {
        const container = document.getElementById("plantContainer");
        plants.forEach(plant => {
            const card = document.createElement("div");
            card.classList.add("plantCard");
            card.innerHTML = `
                <img src="${plant.image}" alt="${plant.name}" class="plantImg">
                <h3>${plant.name}</h3>
                <p>Sun: ${plant.sun}</p>
                <p>Water: ${plant.water}</p>
                <button class="addPlantBtn">Add to Garden</button>`;
            const button = card.querySelector(".addPlantBtn");
            button.addEventListener("click", () => {
                let garden = JSON.parse(localStorage.getItem("gardenPlan")) || [];
                garden.push(plant);
                localStorage.setItem("gardenPlan", JSON.stringify(garden));
                displaySavedGarden();
            });
            container.appendChild(card);
        });
    });
}

if (window.location.pathname.includes("fencing.html")) {
    loadFencing().then(items => {
        const container = document.getElementById("fenceContainer");
        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("plantCard");
            card.innerHTML = `<h3>${item.name}</h3><p>Material: ${item.material}</p><p>Height: ${item.height}</p>`;
            container.appendChild(card);
        });
    });
}