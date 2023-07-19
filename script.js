const captchaForm = document.getElementById("captchaForm");
const captchaSection = document.getElementById("captchaSection");
const infoSection = document.getElementById("infoSection");
const captchaInput = document.getElementById("captcha");
const correctAnswer = 2;

captchaForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userAnswer = parseInt(captchaInput.value);
  if (userAnswer === correctAnswer) {
    captchaSection.style.display = "none";
    infoSection.style.display = "block";
  } else {
    alert("1+1 còn không biết ư. Vui lòng thử lại!");
    captchaInput.value = "";
  }
});
