import { api } from '../helpers.js'
import { login } from './login.js'

const form = document.querySelector('#formSign')
const message = document.querySelector('#errorMessage')


const handleSubmitForm = async(e) => {
    e.preventDefault()
    const username = e.target.elements.username
    const password = e.target.elements.password
    const confirm = e.target.elements.confirm

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

    if (!confirm.value) {
        invalid(confirm)
        error = true
    } else {
        error = false
        valid(confirm)
    }

    if (error) return false

    if (confirm.value !== password.value) {
        message.textContent = 'senha e confirmação não são iguais!'
        password.value = ''
        confirm.value = ''
        return false
    } else {
        message.textContent = ''
    }

    const response = await api('POST', '/users', {
        username: username.value,
        password: password.value
    })

    if (response.error) {
        message.textContent = 'este nome de usuário já cadastrado!'
        return false
    }

    await login(username.value, password.value, message)
}

form.addEventListener('submit', handleSubmitForm)