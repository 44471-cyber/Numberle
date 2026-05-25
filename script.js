let answer = generateNumber();
let currentRow = 0;
const board = document.getElementById("board");
for (let i = 0; i < 6; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 5; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
  board.appendChild(row);
}
function generateNumber() {
  let num = "";
  for (let i = 0; i < 5; i++) {
    num += Math.floor(Math.random() * 10);
  }
  return num;
}
function submitGuess() {
  const input = document.getElementById("guessInput");
  const messageEl = document.getElementById("message");
  const guess = input.value;
  if (!/^\d{5}$/.test(guess)) {
      if (/[a-zA-Z]/.test(guess)) {
          document.getElementById("message").textContent = "Do not insert letters.";
	  } else if (guess === "") {
		  document.getElementById("message").textContent = "Do not enter empty space.";
      } else if (guess === /[^a-zA-Z0-9]/.test(guess)) {
		  document.getElementById("message").textContent = "Do not enter special characters.";
	  } else {
          document.getElementById("message").textContent = "Enter exactly 5 numbers.";
      }
setTimeout(() => {
          messageEl.textContent = "";
      }, 2000);
      input.value = "";
      return;
  }
  if (currentRow >= 6) return;
  const row = board.children[currentRow].children;
  let answerArr = answer.split("");
  let guessArr = guess.split("");
  for (let i = 0; i < 5; i++) {
      row[i].textContent = guess[i];
      if (guess[i] === answer[i]) {
          row[i].classList.add("correct");
          answerArr[i] = null;
          guessArr[i] = null;
      }
  }
  for (let i = 0; i < 5; i++) {
      if (guessArr[i] !== null) {
          let index = answerArr.indexOf(guessArr[i]);
          if (index !== -1) {
              row[i].classList.add("present");
              answerArr[index] = null;
          } else {
              row[i].classList.add("absent");
          }
      }
  }
  if (guess === answer) {
      document.getElementById("message").textContent = "You win!";
      document.getElementById("restartBtn").style.display = "inline-block";
      document.getElementById("guessBtn").style.display = "none";
      return;
  }
  currentRow++;
  input.value = "";
  if (currentRow === 6) {
      document.getElementById("message").textContent = "Game Over! Number was: " + answer;
      document.getElementById("restartBtn").style.display = "inline-block";
      document.getElementById("guessBtn").style.display = "none";
  }
}
console.log("Answer:", answer);
function restartGame() {
  answer = generateNumber();
  currentRow = 0;
  for (let i = 0; i < 6; i++) {
    const row = board.children[i].children;
    for (let j = 0; j < 5; j++) {
      row[j].textContent = "";
      row[j].classList.remove("correct", "present", "absent");
    }
  }
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("guessBtn").style.display = "inline-block";
  console.log("New Answer:", answer);
}
