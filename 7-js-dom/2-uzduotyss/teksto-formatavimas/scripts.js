let tekstas = document.querySelector(".text");
document.querySelector("#sriftoInput").addEventListener('input', (event) => {
    console.log(event.target.value)
tekstas.style.fontSize = `${event.target.value}px`
});



let mygtukai = document.querySelectorAll('paprastas')

