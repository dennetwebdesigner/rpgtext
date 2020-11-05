let server

const webSocket = (appServer) => {
    server = appServer
    const io = require('socket.io')(server)
    let messages = []

    io.on('connection', socket => {
        console.log('socket conectado: ' + socket.id)

        socket.emit('previousMessage', messages)

        socket.on('sendMessage', ({ name, message }) => {
            messages.push({ name, message })
            socket.emit('message', { name, message })
            socket.broadcast.emit('message', { name, message })
        })
    })
}

module.exports = webSocket