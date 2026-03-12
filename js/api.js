// =================================================
// API COMMUNICATION MODULE
// Responsible for retrieving plant data from external APIs - talks to external plant data services
// =================================================


// Defines the base URL for the plant API that will provide plant information
const API_BASE_URL = "https://perenual.com/api/v2/species-list";


// Placeholder variable where the API key will later be stored for authentication with the plant API
const API_KEY = "_API_KEY_HERE";


// Defines an asynchronous function that retrieves plant data based on a search query
export async function fetchPlantData(query) {

    // Constructs the full request URL by combining the base URL, API key, and search query
    const requestURL = `${API_BASE_URL}?key=${API_KEY}&q=${query}`;

    try {

        // Sends a request to the plant API server and waits for the response
        const response = await fetch(requestURL);

        // Converts the API response from JSON text into a usable JavaScript object
        const data = await response.json();

        // Returns the plant data so other modules can use it
        return data;

    } catch (error) {

        // Logs an error message in the browser console if the API request fails
        console.error("API request failed:", error);

        // Returns an empty result so the application does not crash
        return null;

    }

}