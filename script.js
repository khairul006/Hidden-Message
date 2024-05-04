// Function to handle button click event
function handleButtonClick() {
    // Get the button element
    const button = document.getElementById('myButton');
    
    // Parse the current padding values
    const currentPadding = button.style.padding || window.getComputedStyle(button).padding;
    const [currentPaddingTopBottom, currentPaddingLeftRight] = currentPadding.split(' ');

    // Convert current padding values to numbers and decrease by 5px
    const newPaddingTopBottom = Math.max(parseInt(currentPaddingTopBottom) - 5, 0);
    const newPaddingLeftRight = Math.max(parseInt(currentPaddingLeftRight) - 5, 0);
    
    // Set the new padding
    button.style.padding = `${newPaddingTopBottom}px ${newPaddingLeftRight}px`;
    
    // Parse the current font size
    const currentFontSize = button.style.fontSize || window.getComputedStyle(button).fontSize;
    
    // Convert current font size to number and decrease by 5px
    const newFontSize = Math.max(parseInt(currentFontSize) - 5, 0);
    
    // Set the new font size
    button.style.fontSize = `${newFontSize}px`;

    // Parse the current width
    const currentWidth = button.style.width || window.getComputedStyle(button).width;
    
    // Convert current width to number and decrease by 5px
    const newWidth = Math.max(parseInt(currentWidth) - 5, 0);
    
    // Set the new width
    button.style.width = `${newWidth}px`;
}

// Get the button element and add the click event listener
const button = document.getElementById('myButton');
button.addEventListener('click', handleButtonClick);
