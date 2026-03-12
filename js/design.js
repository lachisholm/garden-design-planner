// =================================================
// GARDEN DESIGN MODULE - this file is my brain logic for how the garden designwill work, including plant compatibility and layout calculations
// Handles plant compatibility and garden layout logic and rules (garden intelligence lives here)
// =================================================


// Defines a function that checks compatibility between two plants
export function checkPlantCompatibility(plantA, plantB) {

    // Checks whether plantA has a list of plants it should avoid
    if (plantA.avoid && plantA.avoid.includes(plantB.name)) {

        // Returns an object describing an incompatibility warning
        return {
            compatible: false,
            message: `${plantA.name} should not be planted near ${plantB.name}`
        };

    }

    // Checks whether plantA has recommended companion plants
    if (plantA.goodCompanions && plantA.goodCompanions.includes(plantB.name)) {

        // Returns an object indicating a positive companion relationship
        return {
            compatible: true,
            message: `${plantA.name} grows well with ${plantB.name}`
        };

    }

    // Returns a neutral result when no specific compatibility rule exists
    return {
        compatible: null,
        message: "No compatibility data available"
    };

}


// Defines a function that evaluates a full garden plan for conflicts
export function evaluateGardenPlan(plants) {

    // Creates an array to hold compatibility results
    const results = [];

    // Loops through every plant in the garden
    for (let i = 0; i < plants.length; i++) {

        // Compares the current plant to every other plant in the garden
        for (let j = i + 1; j < plants.length; j++) {

            // Retrieves the compatibility result for the plant pair
            const compatibility = checkPlantCompatibility(plants[i], plants[j]);

            // Adds the compatibility result to the results list
            results.push(compatibility);

        }

    }

    // Returns the list of compatibility results
    return results;

}


// Defines a function that calculates the area of a garden plot
export function calculateGardenArea(width, length) {

    // Converts width value into a number
    const numericWidth = Number(width);

    // Converts length value into a number
    const numericLength = Number(length);

    // Calculates the area of the garden plot
    const area = numericWidth * numericLength;

    // Returns the calculated area value
    return area;

}