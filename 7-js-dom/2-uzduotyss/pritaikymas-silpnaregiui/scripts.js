let mygtukas = document.querySelector('.padidint')
let didesnisTekstas = document.querySelector('body')

mygtukas.addEventListener('click', () => {
    if (didesnisTekstas.classList.contains('bigText')) {
        didesnisTekstas.classList.remove('bigText')
    mygtukas.textContent = 'Viska isdidinti'
    } else {
        didesnisTekstas.classList.add('bigText');
        mygtukas.textContent = 'Viska grazint atgal'
    }
})