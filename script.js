const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "awwwww, I Like You Too";
    gif.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjIeoHgBaNt7wjr58VxSQJWMnaj8a06DgC1mxI9f0iimbYu8Zhg54u3bVibRP2Do8Bmo&usqp=CAU";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    
});
