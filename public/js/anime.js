const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime
  .timeline({
    loop: true,
  })
  .add({
    targets: ".text span",
    translateY: [-600, 0],
  });
