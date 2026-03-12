// =================================================
// VALIDATION MODULE
// Responsible for checking user input before saving data
// =================================================


// Defines a function that checks whether a value exists and is not empty
export function validateRequired(value) {

    // Checks if the value is null, undefined, or an empty string
    if (value === null || value === undefined || value === "") {

        // Returns false if the value is missing
        return false;

    }

    // Returns true if the value exists
    return true;

}


// Defines a function that validates a numeric measurement input
export function validateMeasurement(value) {

    // Converts the input value into a number for validation
    const numberValue = Number(value);

    // Checks whether the converted value is not a valid number
    if (isNaN(numberValue)) {

        // Returns false if the input is not a number
        return false;

    }

    // Checks whether the number is less than or equal to zero
    if (numberValue <= 0) {

        // Returns false if the measurement is not positive
        return false;

    }

    // Returns true if the measurement value is valid
    return true;

}


// Defines a function that validates plant names entered by a user
export function validatePlantName(name) {

    // Checks if the plant name contains fewer than two characters
    if (name.length < 2) {

        // Returns false if the plant name is too short
        return false;

    }

    // Returns true if the plant name meets basic requirements
    return true;

}


// Defines a function that validates a garden area measurement
export function validateGardenArea(width, length) {

    // Validates the width measurement using the measurement validator
    const widthValid = validateMeasurement(width);

    // Validates the length measurement using the measurement validator
    const lengthValid = validateMeasurement(length);

    // Checks whether both width and length are valid measurements
    if (widthValid && lengthValid) {

        // Returns true when both measurements are valid
        return true;

    }

    // Returns false if either measurement is invalid
    return false;

}