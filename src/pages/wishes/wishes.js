document.addEventListener("DOMContentLoaded", () => {
    // Animated Wishes Text
    const textToAnimate =
        "Semoga Hari Lahir ini membawa sinar bahagia dalam hidupmu, sebagaimana sinar mentari menerangi pagi. Semoga setiap langkahmu penuh keberkatan dan cinta. 💛";

    const wishesTextElement = document.getElementById("wishes-text");
    let currentIndex = 0;

    function animateText() {
        if (currentIndex < textToAnimate.length) {
            wishesTextElement.textContent += textToAnimate[currentIndex];
            currentIndex++;
            setTimeout(animateText, 70); // smoother typing feel
        }
    }

    animateText();

    // MUSIC CONTROLLER
    const audio = document.getElementById("background-music");
    const cdPlayer = document.getElementById("cd-player");

    if (audio && cdPlayer) {
        // Toggle play/pause when clicking the CD player
        cdPlayer.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();  // Play the audio
                cdPlayer.classList.remove("paused");  // Remove grayscale
            } else {
                audio.pause();  // Pause the audio
                cdPlayer.classList.add("paused");  // Add grayscale
            }
        });

        // Add grayscale if music is initially paused
        if (audio.paused) {
            cdPlayer.classList.add("paused");
        }
    } else {
        console.error("Audio or CD player element not found.");
    }


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
