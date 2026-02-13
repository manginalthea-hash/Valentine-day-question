// Get the buttons
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Position the "No" button initially
noBtn.style.left = "50%";
noBtn.style.top = "60%";

// Make "No" button run away when hovered
noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 120));
  const y = Math.floor(Math.random() * (window.innerHeight - 120));
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Show a sweet message when "Yes" is clicked
yesBtn.addEventListener('click', () => {
  alert("Yay! You’re my Valentine!");
});
