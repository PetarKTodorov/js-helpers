/**
 * Checks if a given value is a falsy value in JavaScript.
 * JS falsy values are: false, 0, '', null, undefined, NaN.
 * @param {*} value - The value to be checked.
 * @returns {boolean} - True if the value is falsy, false otherwise.
 */
function isFalsyValue(value) {
    return !value;
}


/**
 * Checks if a value is null or undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is null or undefined, false otherwise.
 */
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}

/**
 * Measures the execution time of a given function.
 * @param {Function} func - The function to be executed and measured.
 * @returns {number|null} - The execution time in milliseconds, or null if there was an error.
 */
function measureExecutionTime(func) {
    try {
        const startTime = performance.now();
        func();
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        return executionTime;
    } catch (error) {
        console.error('Error measuring execution time:', error);
        return null;
    }
}

export { 
    isFalsyValue,
    isNullOrUndefined,
    measureExecutionTime,
};
