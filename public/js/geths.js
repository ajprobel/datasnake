const scoreEls = document.querySelectorAll(".scorespan");
var scoreArr = [];
// learned about NodeList objects/methods here: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/values
// for...of will take each element, get its value, push it into array.
for (const el of scoreEls) {
  scoreArr.push(el.innerHTML);
}
// Sorts in descending order; returns first item (highest #)
const getHighest = () => {
  scoreArr.sort((a, b) => b - a);
  return scoreArr[0];
};
const highscore = getHighest();

const hsElement = document.querySelector("#user-hs");
hsElement.innerHTML = highscore;
