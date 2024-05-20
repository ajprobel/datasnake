const text = document.querySelector("#title");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime
  .timeline({
    loop: false,
  })
  .add({
    targets: "#title span",
    color: "#5e17eb",
    translateY: [-600, 0],
    scale: [6, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 650,
    delay: anime.stagger(100),
  })
  .add({
    targets: "#title span",
    color: "#21ef80",
    translateX: [0, -1000],
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 650,
    delay: anime.stagger(120),
  })
  .add({
    targets: "#title span",
    color: "#21ef80",
    translateX: [1000, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 450,
    delay: anime.stagger(120),
  })
  .add({
    targets: "#title",
    textShadow: [
      {
        duration: 1300,
        value: "2px 2px 10px #FA3317",
      },
    ],
  });

anime({
  targets: "#snake",
  translateX: {
    value: [-1000, 0],
    duration: 1000,
  },
  rotate: {
    value: 720,
    duration: 800,
    easing: "easeInOutSine",
  },
  scale: {
    value: 1.2,
    duration: 1000,
    delay: 800,
    easing: "easeInOutQuart",
  },
  delay: 4000,
});

anime({
  targets: "#home-btn",
  translateY: [150, 0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 7000,
});
anime({
  targets: "#hs-btn",
  translateY: [150, 0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 5000,
});
anime({
  targets: "#usr-srch",
  translateY: [150, 0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 4000,
});
anime({
  targets: "#act-btn",
  translateY: [150, 0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 5000,
});
anime({
  targets: "#lgt-btn",
  translateY: [150, 0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 7000,
});

anime({
  targets: "#endText",

  textShadow: [{
    duration: 1500,
    value: "2px 2px 10px #21ef80"
  }],
  translateX: [-1000, 0],
  duration: 1500,
  delay: 4500,
});
