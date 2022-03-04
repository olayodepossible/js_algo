let display = document.getElementById("input")
let increment = 0
let timer;
let click = document.getElementById("button");

click.addEventListener('click', (e) => {
    clearTimeout(timer)
    display.value = increment++;

    timer = setTimeout(() =>{
        increment = 0
    }, 5000)
    
});