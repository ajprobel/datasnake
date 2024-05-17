const text = document.querySelector("#title");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: "#title span",
    translateY: [-600, 0],
    scale: [6, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: anime.stagger(100),
  })
  .add({
    targets: "#title span",
    translateX: [0, -1000],
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 800,
    delay: anime.stagger(100),
  })
  .add({
    targets: "#title span",
    translateX: [1000, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    delay: anime.stagger(100),
  });

anime({
  targets: "#snake",
  rotate: {
    value: 1440,
    duration: 4000,
    easing: "easeInOutSine",
  },
});

anime({
  targets: "#home-btn",
  translateY: [120,0],
  easing: "easeOutExpo"
});

anime({
  targets: "#navbarNav",
  translateY: [120,0],
  easing: "easeOutExpo"
});
