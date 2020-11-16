import { qs, errorApi } from '../helpers.js'
import { allMyChars, createNewCharacter } from './dataServer.js'
import { hasAuth } from '../auth.js'
window.onload = async() => {
    await hasAuth()
    const newEl = qs('#new')
    const modalEl = qs('#modal')
    const closeEl = qs('#close')
    const createCharacter = qs('#createCharacter')
    const message = qs('#message')
    const listEl = qs('#listCharacter')

    const allChars = await allMyChars()


    const setListEl = (data, element) => {
        element.innerHTML = ''

        if (data) {
            data.forEach(({ name, level }) => {
                element.innerHTML += ` 
                <a href='/jogo' style='text-align:center;text-decoration:none'>
                    <li class = "character">
                        <h3> ${ name } </h3>
                        <h3> level ${ level } </h3> 
                    </li>
                </a>
            `
            })
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        message.textContent = ''

        const name = e.target.elements.name

        if (!name.value) {
            message.textContent = 'campo não pode estar vazio'
            return false
        }

        if (!(await createNewCharacter(name.value, message))) return false

        const reloadChars = await allMyChars()
        setListEl(reloadChars, listEl)
        name.value = ''
        modalEl.style.display = 'none'

    }

    setListEl(allChars, listEl)


    newEl.addEventListener('click', () => modalEl.style.display = 'flex')
    closeEl.addEventListener('click', () => modalEl.style.display = 'none')
    createCharacter.addEventListener('submit', handleSubmit)

}