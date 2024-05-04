// The text to be animated
const textToAnimate = "Semoga Hari Lahir ini membawa sinar bahagia ke dalam hidupmu sebagaimana sinar matahari yang menerangi dunia setiap pagi. Semoga setiap langkah yang kamu lalui dipenuhi dengan keberkatan dan rahmat Allah.";

// The element where the animated text will be displayed
const wishesTextElement = document.getElementById('wishes-text');

// Variables to keep track of the current letter index and the interval
let currentLetterIndex = 0;
let intervalId;

// Function to animate the text
function animateText() {
    // Add the next letter to the element
    wishesTextElement.textContent += textToAnimate[currentLetterIndex];
    
    // Increment the current letter index
    currentLetterIndex++;
    
    // If the current letter index reaches the end of the text, stop the interval
    if (currentLetterIndex >= textToAnimate.length) {
        clearInterval(intervalId);
    }
}

// Start the interval to animate the text, displaying one letter every 150 milliseconds
intervalId = setInterval(animateText, 90);
