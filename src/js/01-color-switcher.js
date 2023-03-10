const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
stopBtn.disabled = true;
let timerId = null;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
      }, 1000);
    });
  
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});


// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> 
// на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору 
// фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки 
// зміна теми запущена, кнопка «Start» була неактивною (disabled).
// onclick="this.disabled=true