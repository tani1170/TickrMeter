import "./style.css";
// STYRER DARK MODE -----------------
// On page load or when changing themes, best to add inline in `head` to avoid FOUC

//---------------------  Produkt pakke funktion  --------------------- //

// Array med billednavne for hver knap
const images = {
  single: [
    "img/product/single-product1.webp",
    "img/product/single-product2.webp",
    "img/product/single-product3.webp",
  ],
  twoPack: [
    "img/product/two-product1.webp",
    "img/product/two-product2.webp",
    "img/product/two-product3.webp",
  ],
  threePack: [
    "img/product/three-product1.webp",
    "img/product/three-product2.webp",
    "img/product/three-product3.webp",
  ],
  sixPack: [
    "img/product/single-product1.webp",
    "img/product/two-product1.webp",
    "img/product/three-product1.webp",
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

//
// Funktion til at skifte mellem temaer

var root = document.documentElement,
  theme =
    window
      .getComputedStyle(root)
      .getPropertyValue("--light") ===
    " "
      ? "dark"
      : "light";

document
  .getElementById("toggle-theme")
  .addEventListener(
    "click",
    toggleTheme
  );

function toggleTheme() {
  root.classList.remove(theme);
  theme =
    theme === "dark" ? "light" : "dark";
  root.classList.add(theme);
}
