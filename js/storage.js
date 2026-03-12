// =================================================
// LOCAL STORAGE MODULE
// Handles saving, retrieving, and clearing garden data
// =================================================


// Defines the storage key used to save garden plans in the browser
const STORAGE_KEY = "gardenPlan";


// Defines a function that retrieves the saved garden plan from localStorage
export function getGardenPlan() {

    // Retrieves the stored data from the browser using the defined storage key
    const storedData = localStorage.getItem(STORAGE_KEY);

    // Checks whether any data exists in storage
    if (!storedData) {

        // Returns an empty array if nothing has been saved yet
        return [];

    }

    // Converts the stored JSON string back into a JavaScript object
    return JSON.parse(storedData);

}


// Defines a function that saves a garden plan into localStorage
export function saveGardenPlan(gardenArray) {

    // Converts the garden array into a JSON string and stores it in the browser
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gardenArray));

}


// Defines a function that adds a new plant object to the saved garden plan
export function addPlantToGarden(plant) {

    // Retrieves the current garden plan from storage
    const gardenPlan = getGardenPlan();

    // Adds the new plant object to the array
    gardenPlan.push(plant);

    // Saves the updated garden plan back into storage
    saveGardenPlan(gardenPlan);

}


// Defines a function that removes a plant from the saved garden plan
export function removePlantFromGarden(plantName) {

    // Retrieves the current garden plan from storage
    const gardenPlan = getGardenPlan();

    // Creates a new array that excludes the plant that should be removed
    const updatedGarden = gardenPlan.filter(p => p.name !== plantName);

    // Saves the updated garden array back into storage
    saveGardenPlan(updatedGarden);

}


// Defines a function that completely clears the garden plan from storage
export function clearGardenPlan() {

    // Removes the storage entry from the browser entirely
    localStorage.removeItem(STORAGE_KEY);

}