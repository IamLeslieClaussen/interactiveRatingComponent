const submitBtn = document.getElementById("submit-btn");
const ratingComponent = document.getElementById("rating-component");
const thankYouComponent = document.getElementById("thank-you");
const ratingButtons = document.querySelectorAll(".rating-btn");
const ratingScore = document.querySelector(".Dynamic-number");
console.log(ratingScore);

ratingScore.textContent = "";

submitBtn.addEventListener("click", submitScore);

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", ratingButtonClicked);
});

function submitScore(e) {
  e.preventDefault();
  ratingComponent.style.display = "none";
  thankYouComponent.style.display = "block";
}

function ratingButtonClicked(e) {
  if (e.target.classList.contains("rating-btn")) {
    e.target.classList.toggle("active");
    ratingScore.textContent = e.target.textContent;
  }
}
