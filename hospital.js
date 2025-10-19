// Select elements
const slides = document.querySelectorAll(".patientReview");
const cards = document.querySelectorAll(".card");
const detail = document.querySelector(".detail");
const content = document.querySelector(".content");
const closeBtn = document.querySelector("#closeBtn");
const connectBtn = document.querySelector("#connectBtn");

// Patient Slide Show
let count = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function moveSlides() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}

setInterval(() => {
  count++;
  if (count === slides.length) count = 0;
  moveSlides();
}, 2000);


// Doctor Cards Click Event
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector(".image").src;
    const name = card.querySelector(".name").innerText;
    const desc = card.querySelector(".desc").innerText;

    detail.style.display = "block";
    content.innerHTML = `
      <img src="${imgSrc}" alt="${name}">
      <div class="contentText">
        <h2>${name}</h2>
        <p>${desc}</p>
      </div>
    `;
  });
});

// Close Button Functionality
closeBtn.addEventListener("click", () => {
  detail.style.display = "none";
});

// Connect Button Functionality
connectBtn.addEventListener("click", () => {
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  if (email.value === "" || password.value === "") {
    alert("Enter your details");
  } else {
    alert("You are logged in");
  }
});
