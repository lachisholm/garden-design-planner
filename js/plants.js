// =================================================
// PLANT DATA MODULE
// Responsible for loading plant data from local JSON files
// loads plant data
// =================================================


// Defines the file path for the food plants dataset located in the data folder
const FOOD_PLANT_DATA_PATH = "data/food-plants.json";


// Defines the file path for the flowers dataset located in the data folder
const FLOWER_DATA_PATH = "data/flowers.json";


// Defines the file path for the fencing dataset located in the data folder
const FENCING_DATA_PATH = "data/fencing.json";


// Defines an asynchronous function that loads food plant data from the local JSON file
export async function loadFoodPlants() {

    // Sends a request to the browser to retrieve the food plants JSON file
    const response = await fetch(FOOD_PLANT_DATA_PATH);

    // Converts the retrieved JSON text into a usable JavaScript object
    const data = await response.json();

    // Returns the plant data so other modules can use it
    return data;

}


// Defines an asynchronous function that loads flower data from the local JSON file
export async function loadFlowers() {

    // Sends a request to retrieve the flower dataset
    const response = await fetch(FLOWER_DATA_PATH);

    // Converts the JSON file into a JavaScript object
    const data = await response.json();

    // Returns the flower dataset
    return data;

}


// Defines an asynchronous function that loads fencing information from the local JSON file
export async function loadFencing() {

    // Sends a request to retrieve the fencing dataset
    const response = await fetch(FENCING_DATA_PATH);

    // Converts the JSON file into a JavaScript object
    const data = await response.json();

    // Returns the fencing data
    return data;

}