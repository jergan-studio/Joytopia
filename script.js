const player = document.getElementById("player");

function walk() {
  player.classList.add("walk");
}

function stop() {
  player.classList.remove("walk");
}

function randomColor() {
  const torso = document.querySelector(".torso");
  const colors = ["red", "blue", "green", "purple", "orange", "black"];
  
  const random = colors[Math.floor(Math.random() * colors.length)];
  torso.style.background = random;
}
