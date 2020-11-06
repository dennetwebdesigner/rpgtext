window.onload = () => {
    const newEl = document.querySelector('#new')
    const modalEl = document.querySelector('#modal')
    const closeEl = document.querySelector('#close')
    const formEl = document.querySelector('#createCharacter')

    newEl.addEventListener('click', () => modalEl.style.display = 'flex')
    closeEl.addEventListener('click', () => modalEl.style.display = 'none')


}