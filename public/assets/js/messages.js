import { socket } from './socketConfig.js'

export const sendMessage = (name, message) => {
    socket.emit('sendMessage', {
        name,
        message
    })
}

export const previousMessage = (renderHTML) => {
    socket.on('previousMessage', data => {
        data.forEach(element => {
            let name = element.name
            let message = element.message
            renderHTML({
                message,
                name
            })
        })
    })
}

export const message = (renderHTML) => {
    socket.on('message', ({
        name,
        message
    }) => {
        renderHTML({
            message,
            name
        })
    })
}