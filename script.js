//your JS code here. If required
const squares = document.querySelectorAll(".square");

squares.forEach((sq) => {
  sq.addEventListener("mouseenter", (e) => {
    squares.forEach((el) => {
      if (el !== e.target) {
        el.style.backgroundColor = "#6F4E37"; // others
      }
    });
  });

  sq.addEventListener("mouseleave", () => {
    squares.forEach((el) => {
      el.style.backgroundColor = "#E6E6FA"; // reset all
    });
  });
});
