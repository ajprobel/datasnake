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
    duration: 800,
    delay: anime.stagger(100),
  })
  .add({
    targets: "#title span",
    color: "#21ef80",
    translateX: [0, -1000],
    scale: [1, 1],
    opacity: [1, 0],
    easing: "easeOutExpo",
    duration: 800,
    delay: anime.stagger(100),
  })
  .add({
    targets: "#title span",
    color: "#21ef80",
    translateX: [1000, 0],
    scale: [1, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    delay: anime.stagger(100),
  });

// anime({
//   targets: "#snake",
//   rotate: {
//     value: 1800,
//     duration: 4000,
//     easing: "easeInOutSine",
//   }
// });

anime({
  targets: "#snake",
  translateX:{
    value: [-1000, 0],
    duration: 1000
  },
  rotate: {
    value: 720,
    duration: 1000,
    easing: "easeInOutSine",
  },
  scale:{
    value: 1.2,
    duration: 1000,
    delay: 800,
    easing: "easeInOutQuart",
  },
  delay: 4500
});

anime({
  targets: "#home-btn",
  translateY: [150,0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 7000
});
anime({
  targets: "#hs-btn",
  translateY: [150,0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 5000
});
anime({
  targets: "#usr-srch",
  translateY: [150,0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 3000
});
anime({
  targets: "#act-btn",
  translateY: [150,0],
  color: ["#5e17eb", "#ffffff"],
  easing: "easeOutExpo",
  duration: 5000
});
anime({
  targets: "#lgt-btn",
  color: ["#5e17eb", "#ffffff"],
  translateY: [150,0],
  easing: "easeOutExpo",
  duration: 7000
});
