// List of allowed names (all lowercase for comparison)
const allowedNames = ["izzah", "nurul izzah", "izzah noordin", "izzahnoordin", "crush"];

// Get DOM elements
const nameInput = document.getElementById('nameInput');
const myButton = document.getElementById('myButton');
const nextButton = document.getElementById('nextButton');

// Shrink the button and check name
myButton.addEventListener('click', () => {
  myButton.style.padding = '5px 10px';
  myButton.style.fontSize = '0.8rem';
  myButton.innerText = "Still Nooo 🙈";

  const enteredName = nameInput.value.trim().toLowerCase();

  if (allowedNames.includes(enteredName)) {
    nextButton.style.display = 'inline-block';
    myButton.style.display = 'none';
    nameInput.disabled = true;
  }
});

// Allow Enter key to trigger check
nameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    myButton.click();
  }
});
