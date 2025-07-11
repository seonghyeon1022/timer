const timerInput = document.querySelectorAll(".timer__input");
const startBtn = document.querySelector(".timer__btn--start");
const resetBtn = document.querySelector(".timer__btn--reset");

timerInput.forEach((input) => {
    input.addEventListener('input', () => {
        startBtn.innerHTML = `
        <img src="./images/start-default.svg" alt="스타트 버튼">
        `;

        resetBtn.innerHTML = `
        <img src="./images/reset-default.svg" alt="리셋 버튼">
        `;
    });
});

resetBtn.addEventListener('click', () => {
    timerInput.forEach((input) => {
        input.value = "00";
    });

})