// The text to be animated
const textToAnimate = "Semoga Hari Lahir ini membawa sinar bahagia dalam hidupmu sebagaimana sinar matahari yang menerangi bumi setiap pagi. Semoga setiap langkah yang kau lalui dipenuhi dengan keberkatan dan rahmat Ilahi.";

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



// MUSIC
// Namespace for the music functionality
const musicNamespace = {
    audio: document.getElementById('background-music'),
    cdPlayer: document.getElementById('cd-player'),

    // Function to toggle play/pause and update the image
    togglePlayPause: function() {
        if (this.audio.paused) {
            // Play the audio
            this.audio.play();
            // Remove 'paused' class from the image to remove grey filter
            this.cdPlayer.classList.remove('paused');
        } else {
            // Pause the audio
            this.audio.pause();
            // Add 'paused' class to the image to apply grey filter
            this.cdPlayer.classList.add('paused');
        }
    },

    // Initialize event listeners
    init: function() {
        // Add click event listener to the GIF image
        this.cdPlayer.addEventListener('click', (event) => {
            // Call togglePlayPause function when image is clicked
            this.togglePlayPause();
            // Prevent click event from propagating to other elements
            event.stopPropagation();
        });
    }
};

// Initialize the music functionality when the script is loaded
musicNamespace.init();
