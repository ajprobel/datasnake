var canvas = document.getElementById(`game`);
var context = canvas.getContext("2d");
var scoreEl = document.getElementById("score");
var saveScoreBtn = document.getElementById("saveScore");

// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
var grid = 16;
var count = 0;
var snake = {
  x: 160,
  y: 160,
  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,
  // keep track of all grids the snake body occupies
  cells: [],
  // length of the snake. grows when eating an apple
  maxCells: 4,
};
var apple = {
  x: 320,
  y: 320,
};

// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// These were added by Daniel
let animationFrameId;
let finalscore = 0;
const diffDrop = document.querySelector("#difficulty");
var diffVal = diffDrop.value;
const chooseDiff = () => {
  diffVal = diffDrop.value;
};
diffDrop.addEventListener("change", chooseDiff);

// Added by Daniel - altered by James
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => {
  scoreEl.innerHTML = "";
  console.log("game started!");
  hideSaveScore();
  loop();
});

// logic for save score button
saveScoreBtn.addEventListener("click", async () => {
  const newScore = scoreEl.innerText;
  console.log(`saving your score of ${newScore}`);
  const response = await fetch("/api/scores/newScore", {
    method: "POST",
    body: JSON.stringify({ newScore }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("score saved!");
  } else {
    alert("Failed to save score");
  }
});

// show save score button
function showSaveScore() {
  saveScoreBtn.setAttribute("style", "display:block");
}

//hide save score button
function hideSaveScore() {
  saveScoreBtn.setAttribute("style", "display:none");
}

// game loop
function loop() {
  animationFrameId = requestAnimationFrame(loop);
  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  // Switch/case added by Daniel
  switch (diffVal) {
    case "Easy":
      if (++count < 4) {
        return;
      }
      break;
    case "Medium":
      if (++count < 3) {
        return;
      }
      break;
    case "Hard":
      if (++count < 2) {
        return;
      }
      break;
  }
  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  // move snake by it’s velocity
  snake.x += snake.dx;
  snake.y += snake.dy;
  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({ x: snake.x, y: snake.y });
  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  // draw apple
  context.fillStyle = "red";
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
  // draw snake one cell at a time
  context.fillStyle = "green";
  snake.cells.forEach(function (cell, index) {
    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }
    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {
      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        // Added by Daniel
        switch (diffVal) {
          case "Easy":
            finalscore = snake.cells.length;
            break;
          case "Medium":
            finalscore = Math.round(snake.cells.length * 1.5);
            break;
          case "Hard":
            finalscore = Math.round(snake.cells.length * 2);
            break;
        }
        // James - added code for game ending
        scoreEl.innerHTML = finalscore;
        showSaveScore();
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
        //Added by Daniel
        cancelAnimationFrame(animationFrameId);
      }
    }
  });
}
// listen to keyboard events to move the snake
document.addEventListener("keydown", function (e) {
  // prevent snake from backtracking on itself by checking that it’s
  // not already moving on the same axis (pressing left while moving
  // left won’t do anything, and pressing right while moving left
  // shouldn’t let you collide with your own body)
  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
