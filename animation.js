function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  const colorText = document.querySelector(".change_color");
  const newColor = getRandomColor();
  colorText.style.color = newColor;

  // Call the function recursively for continuous color changes
  setTimeout(changeColor, 1000);
}

// Start the color-changing process
changeColor();
