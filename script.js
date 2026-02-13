function goYes() {
  window.location.href = "yes.html";
}

function goNext(page) {
  window.location.href = page;
}

/* Celebration: balloons & hearts */
function startCelebration() {
  // balloons
  for (let i = 0; i < 25; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.animationDuration = (4 + Math.random() * 4) + "s";
    balloon.style.background =
      ["#ff4d6d","#ff758f","#ff8fa3","#ffb3c1","#ffc2d1"][Math.floor(Math.random()*5)];
    document.body.appendChild(balloon);
  }

  // hearts
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    document.body.appendChild(heart);
  }
}

// Only run celebration on yes.html
window.addEventListener("load", () => {
  if (document.body.getAttribute("onload")?.includes("startCelebration")) {
    startCelebration();
  }
});
