document.addEventListener("DOMContentLoaded", function () {
  const screen = document.getElementById("screen");
  const buttons = Array.from(document.querySelectorAll("button"));
  let shouldResetScreen = false;

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (shouldResetScreen) {
        screen.textContent = "";
        shouldResetScreen = false;
      }

      const buttonValue = e.target.value;
      if (buttonValue === "AC") {
        screen.textContent = "";
      } else if (buttonValue === "=") {
        try {
          screen.textContent = eval(screen.textContent);
        } catch {
          screen.textContent = "Error";
        }
        shouldResetScreen = true;
      } else if (buttonValue === "sin") {
        screen.textContent = Math.sin(parseFloat(screen.textContent)).toFixed(4);
        shouldResetScreen = true;
      } else if (buttonValue === "cos") {
        screen.textContent = Math.cos(parseFloat(screen.textContent)).toFixed(4);
        shouldResetScreen = true;
      } else if (buttonValue === "tan") {
        screen.textContent = Math.tan(parseFloat(screen.textContent)).toFixed(4);
        shouldResetScreen = true;
      } else {
        screen.textContent += buttonValue;
      }
    });
  });
});
