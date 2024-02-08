/**
 * Fires when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
 * @param {Function} func - The function to be executed.
 * @param {Object} [options] - Optional parameters for the event listener.
 */
function onDocumentReady(func, options = {}) {
    document.addEventListener('DOMContentLoaded', func, options);
}

/**
 * Fires when the entire page, including all styles, images, and other resources, has finished loading.
 * @param {Function} func - The function to be executed when the window is loaded.
 * @param {Object} options - Optional parameters for the event listener.
 */
function onWindowLoaded(func, options = {}) {
    window.addEventListener('load', func, options);
}

/**
 * Retrieves the value of a CSS variable by its name.
 * @param {string} variableName - The name of the CSS variable.
 * @returns {string|null} - The value of the CSS variable, or null if the variable is not defined.
 */
function getCssVariableValueByName(variableName) {
    try {
        const styles = getComputedStyle(document.body);
        const propertyValue = styles.getPropertyValue(variableName).trim();

        if (propertyValue === '') {
            console.error(`CSS variable "${variableName}" is not defined.`);
            return null;
        }

        return propertyValue;
    } catch (error) {
        console.error('Error retrieving CSS variable:', error);
        return null;
    }
}

/**
 * Creates a new HTML element with the specified tag, text content, and attributes.
 * 
 * @param {string} tag - The tag name of the element.
 * @param {string} [textContent=''] - The text content of the element.
 * @param {Object} [attributes={}] - The attributes to be set on the element.
 * @returns {HTMLElement} The newly created element.
 */
function createElement(tag, textContent = '', attributes = {}) {
    const element = document.createElement(tag);
    
    element.textContent = textContent;
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    return element;
}

/**
 * Creates a DOM element from an HTML string.
 * @param {string} htmlString - The HTML string to be converted into a DOM element.
 * @returns {Element|null} - The created DOM element, or null if there was an error.
 */
function createElementFromHTML(htmlString) {
    try {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Ensure that there is a child element to return
        if (div.children.length === 0) {
            console.error('Error creating element from HTML: No valid child elements found.');
            return null;
        }

        return div.firstChild;
    } catch (error) {
        console.error('Error creating element from HTML:', error);
        return null;
    }
}

export {
    onDocumentReady,
    onWindowLoaded,
    getCssVariableValueByName,
    createElement,
    createElementFromHTML,
}
