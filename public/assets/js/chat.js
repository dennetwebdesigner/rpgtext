import { sendMessage, previousMessage, message } from './messages.js'
import { socket } from './socketConfig.js'

const form = document.querySelector('#form')
const chatBox = document.querySelector('#chatBox')

const renderHTML = ({
    message,
    name
}) => {
    chatBox.innerHTML += `<div><strong>${name}:</strong> ${message}</div><br>`
    chatBox.scrollTop = chatBox.scrollHeight;
}

previousMessage(renderHTML)

const handleSubmitForm = (e) => {
    e.preventDefault()
    const name = e.target.elements.name
    const message = e.target.elements.message

    if (!name.value || !message.value) {
        alert('não pode enviar mensagem caso seu nome ou a mensagem sejam vazios')
        return false
    }
    sendMessage(name.value, message.value)
    message.value = ''

}

message(renderHTML)


form.addEventListener('submit', handleSubmitForm)