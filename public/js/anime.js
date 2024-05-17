const text = document.querySelector("h2");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const snake = document.querySelector('#snake');

// anime({
//     targets: '.text',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
//   });

anime.timeline({
  loop: false
})
.add({
  targets: 'h2 span',
  translateY: [-600,0],
  scale: [6,1],
  opacity: [0,1],
  easing: 'easeOutExpo',
  duration: 1500,
  delay: anime.stagger(100)
})
.add({
  targets: 'h2 span',
  translateX: [0,-1000],
  scale: [1,1],
  opacity: [1,0],
  easing: 'easeOutExpo',
  duration: 1500,
  delay: anime.stagger(100)
})
.add({
  targets: 'h2 span',
  translateX: [-1000,0],
  scale: [1,1],
  opacity: [0,1],
  easing: 'easeOutExpo',
  duration: 1000,
  delay: anime.stagger(100)
})
.add({
  targets: '#snake',
  translateX: 200,
  direction: 'alternate',
  loop: true,
  easing: 'steps(5)'
})
