import "./style.css";
// STYRER DARK MODE -----------------
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document
  .getElementById("togglenav")
  .addEventListener(
    "click",
    function () {
      document
        .getElementById("nav")
        .classList.toggle(
          "-right-full"
        );
      document
        .getElementById("nav")
        .classList.toggle("right-0");
    }
  );
