function goYes() {
  window.location.href = "yes.html";
}

function goNext(page) {
  window.location.href = page;
}

/* ---------- Floating Buttons ---------- */
function floatButtons() {
  const yesBtn = document.querySelector(".yes");
  const noBtn = document.querySelector(".no");

  function moveButton(btn) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const x = Math.random() * (screenWidth - btn.offsetWidth);
    const y = Math.random() * (screenHeight * 0.6) + screenHeight * 0.2; // mid to bottom
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  }

  // Move buttons every 1.5 seconds
  setInterval(() => {
    if (yesBtn) moveButton(yesBtn);
    if (noBtn) moveButton(noBtn);
  }, 1500);
}

/* ---------- Celebration ---------- */
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

/* Start floating buttons on page load if .no exists */
window.addEventListener("load", () => {
  if (document.querySelector(".no")) floatButtons();
});
