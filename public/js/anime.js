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
  translateY: [200, 0],
  easing: "easeInOutExpo",
  // delay: anime.stagger(100)
  duration: 1000
});

anime({
  targets: "#hs-btn",
  translateY: [200,0],
  easing: "easeInOutExpo",
  // delay: anime.stagger(100)
  duration: 1200
});

anime({
  targets: "#usr-srch",
  translateY: [200,0],
  easing: "easeInOutExpo",
  // delay: anime.stagger(100)
  duration: 1400
});

anime({
  targets: "#act-btn",
  translateY: [200,0],
  easing: "easeInOutExpo",
  // delay: anime.stagger(100)
  duration: 1600
});

anime({
  targets: "#lgt-btn",
  translateY: [200,0],
  easing: "easeInOutExpo",
  // delay: anime.stagger(100)
  duration: 1800
});
