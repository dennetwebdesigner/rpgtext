import { qs, baseUrl, api, errorApi } from '../helpers.js'

const form = qs('#formSign')
const message = qs('#errorMessage')


export const login = async(username, password, message) => {
    const response = await api('POST', '/auth', {
        username,
        password
    })

    if (!(errorApi(response.error, 'validation error', 'os campos não podem estar vazios!', message))) return false

    if (!(errorApi(response.error, 'user not has found', 'usuário não esta cadastrado!', message))) return false

    if (!(errorApi(response.error, 'password invalid', 'senha esta incorreta!', message))) return false

    window.localStorage.setItem('token', response.token)
    window.localStorage.setItem('id', response.user)
    setTimeout(() => window.location.href = `${baseUrl}/personagens`, 500)
}

const handleSubmitLogin = async(e) => {
    e.preventDefault()
    const username = e.target.elements.username
    const password = e.target.elements.password

    const invalid = e => {
        e.style.background = 'red'
        e.style.border = '1px solid white'
        e.style.color = 'white'
    }

    const valid = e => {
        e.style.background = 'black'
        e.style.border = '1px solid red'
        e.style.color = 'red'
    }


    let error = false
    message.textContent = ''


    if (!username.value) {
        invalid(username)
        error = true
    } else {
        error = false
        valid(username)
    }

    if (!password.value) {
        invalid(password)
        error = true
    } else {
        error = false
        valid(password)
    }

    if (error) return false


    await login(username.value, password.value, message)
}

form.addEventListener('submit', handleSubmitLogin)