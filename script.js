const submitBtn = document.getElementById("submit-btn");
const ratingComponent = document.getElementById("rating-component");
const thankYouComponent = document.getElementById("thank-you");
const ratingButtons = document.querySelectorAll(".rating-btn");
const ratingScore = document.getElementsByClassName("Dynamic-number");
console.log(ratingScore);

let defaultScore = 0;

submitBtn.addEventListener("click", submitScore);

function submitScore(e) {
  e.preventDefault();
  ratingComponent.style.display = "none";
  thankYouComponent.style.display = "block";
}
