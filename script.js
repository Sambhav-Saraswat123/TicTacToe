const X = "×";
const O = "○";
let turn = X;
const buttons = document.getElementsByClassName("button");

const currentTurn = () => {
  return turn === X ? O : X;
};
const checkWin = () => {
  const winSituations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winSituations.forEach((win) => {
    if (buttons[win[0]].innerHTML) {
      if (
        buttons[win[0]].innerHTML === buttons[win[1]].innerHTML &&
        buttons[win[1]].innerHTML === buttons[win[2]].innerHTML
      ) {
        turn = currentTurn();
        document.getElementById("win").style.display = "block";
        document.getElementById("banner").innerHTML = `${currentTurn()} wins`;
        buttons[win[0]].style.color = "#aa4300";
        buttons[win[1]].style.color = "#aa4300";
        buttons[win[2]].style.color = "#aa4300";
        buttons[win[0]].style.fontWeight = "bold";
        buttons[win[1]].style.fontWeight = "bold";
        buttons[win[2]].style.fontWeight = "bold";
        Array.from(buttons).forEach((button) => {
          button.disabled = true;
          document.getElementById("banner").innerHTML = `${currentTurn()} won`;
        });
      }
    }
  });
};
window.onload = () => {
  document.getElementById("banner").innerHTML = `Turn for ${currentTurn()}`;
  Array.from(buttons).forEach((element) => {
    if (element.disabled === false) {
      element.addEventListener("click", () => {
        element.disabled = true;
        element.innerHTML = currentTurn();
        turn = currentTurn();
        document.getElementById(
          "banner"
        ).innerHTML = `Turn for ${currentTurn()}`;
        setTimeout(() => {
          checkWin();
        }, 100);
      });
    }
  });
};
document.addEventListener("contextmenu", (event) => event.preventDefault());
