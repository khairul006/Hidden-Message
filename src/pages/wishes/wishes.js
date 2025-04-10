document.addEventListener("DOMContentLoaded", () => {
    
    // MUSIC
    // Namespace for the music functionality
    const musicNamespace = {
        audio: document.getElementById('background-music'),
        cdPlayer: document.getElementById('cd-player'),

        // Function to toggle play/pause and update the image
        togglePlayPause: function () {
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
        init: function () {
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
    // Generating butterflies
    const butterflyCount = 5; // Adjust the number of butterflies
    for (let i = 0; i < butterflyCount; i++) {
        createButterfly();
    }

    function createButterfly() {
        const butterfly = document.createElement("div");
        butterfly.classList.add("butterfly");
        document.body.appendChild(butterfly);

        // Randomize butterfly position
        butterfly.style.top = `${Math.random() * 100}vh`;
        butterfly.style.left = `${Math.random() * 100}vw`;

        // Randomize animation timing
        const animationDuration = Math.random() * (10 - 6) + 6; // 6 to 10 seconds
        butterfly.style.animationDuration = `${animationDuration}s`;
    }
});
