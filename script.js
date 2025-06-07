window.addEventListener("DOMContentLoaded", () => {
  const meanings = [
    "Human Experience Reserve Earth",
    "Home of Embodied Real Encounters",
    "Hearts Everywhere Remember Everything",
    "Holding Energy. Releasing Everything.",
    "Hidden Empires. Revealed Expressions.",
    "Here Exists Real Ecstasy",
    "Haven for Eternal Rhythms & Echoes",
    "Hackers of Emotional Reality & Experience",
    "Harvesting Every Raw Emotion",
    "Healing, Evolution, Ritual, Embodiment",
    "High Empathy, Real Engagement",
    "Heritage, Expression, Roots, Earth",
    "Honor Every Radical Encounter"
  ];

  const mainWord = document.getElementById("main-word");
  const meaningText = document.getElementById("meaning-text");

  let meaningIndex = 0;
  function cycleMeaning() {
    meaningIndex = (meaningIndex + 1) % meanings.length;
    mainWord.style.opacity = 0;
    setTimeout(() => {
      meaningText.textContent = meanings[meaningIndex];
      meaningText.style.opacity = 1;
    }, 1000);
  }

  setTimeout(() => {
    cycleMeaning();
  }, 3000);

  document.body.addEventListener("touchstart", cycleMeaning);
  document.body.addEventListener("click", cycleMeaning);

  const container = document.getElementById("grid-container");

  window.addEventListener("deviceorientation", (event) => {
    const gamma = event.gamma || 0;
    const beta = event.beta || 0;
    container.style.transform = `translate(${gamma * 0.5}px, ${beta * 0.5}px)`;
  });

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX - window.innerWidth / 2) * 0.01;
    const y = (e.clientY - window.innerHeight / 2) * 0.01;
    container.style.transform = `translate(${x}px, ${y}px)`;
  });
});
