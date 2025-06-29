function startSurprise() {
  const music = document.getElementById("music");
  music.play();

  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("photos").classList.remove("hidden");

  const photos = document.querySelectorAll(".photo");
  photos.forEach((img, index) => {
    setTimeout(() => {
      img.classList.remove("hidden");
      img.classList.add("show");
    }, index * 1000);
  });

  setTimeout(() => {
    document.getElementById("letter").classList.remove("hidden");
    typeMessage();
  }, photos.length * 1000 + 1000);

  launchConfetti();

  music.addEventListener("play", () => {
    document.querySelectorAll(".overlay-text").forEach(el => {
      el.classList.add("animate-beat");
    });
  });

  music.addEventListener("pause", () => {
    document.querySelectorAll(".overlay-text").forEach(el => {
      el.classList.remove("animate-beat");
    });
  });
}

function typeMessage() {
  const message = `Dear GOLU 💖,

Today isn't just a day — it's YOUR day.
From the moment I met you, life got brighter,
sweeter, and filled with beautiful memories.
You're my sunshine, my joy, and my reason to smile.
Happy Birthday! 🎂
Love you always. 💕`;

  const typedText = document.getElementById("typed-text");
  let i = 0;
  const typing = setInterval(() => {
    typedText.textContent += message[i];
    i++;
    if (i >= message.length) clearInterval(typing);
  }, 50);
}

function launchConfetti() {
  const container = document.getElementById("confetti");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = Math.random() * -100 + "px";
    confetti.style.backgroundColor = ["#ffb6c1", "#ff69b4", "#ffc0cb"][Math.floor(Math.random() * 3)];
    confetti.style.animationDuration = (2 + Math.random() * 3) + "s";
    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
  }
}
