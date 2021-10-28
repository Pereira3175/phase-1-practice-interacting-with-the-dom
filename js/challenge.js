let timer = document.querySelector('#counter')
let add = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById("heart")
let comment = document.getElementById("comment-input")
let submitButton = document.getElementById("submit")


//console.log("hello", timer, add, minus, heart, comment, submitButton)

//minue button in decrements 

function decrement() {
    return timer.textContent--
}

function increment() {
    return timer.textContent++
}

add.addEventListener('click', increment)
minus.addEventListener('click', decrement)



let i = 0

let pauseID;

document.addEventListener('DOMContentLoaded', function () {
   pauseID = setInterval(function () {
        i += 1;
        timer.textContent = i
    }, 1000);
})

let pause = document.querySelector('#pause')
pause.addEventListener('click', function () {
    clearInterval(pauseID);
})

