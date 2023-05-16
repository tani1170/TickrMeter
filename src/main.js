import "./style.css";

// STYRER DARK MODE -----------------
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches)
) {
  document.documentElement.classList.add(
    "dark"
  );
} else {
  document.documentElement.classList.remove(
    "dark"
  );
}

function setDarkTheme() {
  document.documentElement.classList.add(
    "dark"
  );
  localStorage.theme = "dark";
}

function setLightTheme() {
  document.documentElement.classList.remove(
    "dark"
  );
  localStorage.theme = "light";
}

function onThemeSwitcherItemClick(
  event
) {
  const theme =
    event.target.dataset.theme;

  if (theme === "system") {
    localStorage.removeItem("theme");
    setSystemTheme();
  } else if (theme === "dark") {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

//---------------------  NAVIGATION BURGER --------------------- //
document
  .getElementById("toggle")
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

//---------------------  Produkt pakke funktion  --------------------- //

// Array med billednavne for hver knap
const images = {
  single: [
    "/img/placeholder1.jpg",
    "/img/placeholder2.jpg",
  ],
  twoPack: [
    "/img/placeholder2.jpg",
    "/img/placeholder1.jpg",
  ],
  threePack: [
    "/img/placeholder1.jpg",
    "/img/placeholder2.jpg",
  ],
  sixPack: [
    "/img/placeholder2.jpg",
    "/img/placeholder1.jpg",
  ],
};

// Sæt startværdier
let currentImageIndex = 0;
let currentButton = "single";

// Funktion til at opdatere billedet
function updateImage() {
  const currentImage =
    document.getElementById(
      "currentImage"
    );
  const imagesArray =
    images[currentButton];
  currentImage.src =
    imagesArray[currentImageIndex];
}

// Lyt til klik på knapperne
document
  .getElementById("singleBtn")
  .addEventListener(
    "click",
    function () {
      currentButton = "single";
      currentImageIndex = 0;
      updateImage();
    }
  );

document
  .getElementById("twoPackBtn")
  .addEventListener(
    "click",
    function () {
      currentButton = "twoPack";
      currentImageIndex = 0;
      updateImage();
    }
  );

document
  .getElementById("threePackBtn")
  .addEventListener(
    "click",
    function () {
      currentButton = "threePack";
      currentImageIndex = 0;
      updateImage();
    }
  );

document
  .getElementById("sixPackBtn")
  .addEventListener(
    "click",
    function () {
      currentButton = "sixPack";
      currentImageIndex = 0;
      updateImage();
    }
  );

// Lyt til klik på pilknapperne
document
  .getElementById("prevBtn")
  .addEventListener(
    "click",
    function () {
      const imagesArray =
        images[currentButton];
      if (currentImageIndex > 0) {
        currentImageIndex--;
      } else {
        currentImageIndex =
          imagesArray.length - 1;
      }
      updateImage();
    }
  );

document
  .getElementById("nextBtn")
  .addEventListener(
    "click",
    function () {
      const imagesArray =
        images[currentButton];
      if (
        currentImageIndex <
        imagesArray.length - 1
      ) {
        currentImageIndex++;
      } else {
        currentImageIndex = 0;
      }
      updateImage();
    }
  );

// Prisskifte funktion på pakker

const singleBtn =
  document.querySelector("#singleBtn");
const twoPackBtn =
  document.querySelector("#twoPackBtn");
const threePackBtn =
  document.querySelector(
    "#threePackBtn"
  );
const sixPackBtn =
  document.querySelector("#sixPackBtn");
const productText =
  document.querySelector(
    "#productText"
  );

singleBtn.addEventListener(
  "click",
  () => {
    productText.textContent =
      "699,00 kr";
  }
);

twoPackBtn.addEventListener(
  "click",
  () => {
    productText.textContent =
      "1.260,00 kr";
  }
);

threePackBtn.addEventListener(
  "click",
  () => {
    productText.textContent =
      "1.785,00 kr";
  }
);

sixPackBtn.addEventListener(
  "click",
  () => {
    productText.textContent =
      "3.280,00 kr";
  }
);

// FAQ PRODUKT INFORMATION
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const faqQuestions =
      document.querySelectorAll(
        ".faq-question"
      );

    faqQuestions.forEach(function (
      question
    ) {
      question.addEventListener(
        "click",
        function () {
          const answer =
            this.nextElementSibling;

          // Luk alle andre FAQ-svar
          const allAnswers =
            document.querySelectorAll(
              ".faq-answer"
            );
          allAnswers.forEach(function (
            ans
          ) {
            if (ans !== answer) {
              ans.style.display =
                "none";
              ans.classList.remove(
                "show"
              );
            }
          });

          if (
            answer.classList.contains(
              "show"
            )
          ) {
            answer.style.display =
              "none";
            answer.classList.remove(
              "show"
            );
          } else {
            answer.style.display =
              "block";
            answer.classList.add(
              "show"
            );
          }
        }
      );
    });
  }
);

//
