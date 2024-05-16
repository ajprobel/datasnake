const scoreEls = document.querySelectorAll(".scorespan");
const scoresListEl = document.querySelector("#scores-list");
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
let highscore = getHighest();

// This checks if any scores are present for user. If not, display the following strings in place of scores.
if (!scoreEls.length) {
  scoresListEl.innerHTML = "No scores yet!";
  highscore = "No highscore yet!";
}
const hsElement = document.querySelector("#user-hs");
hsElement.innerHTML = highscore;
