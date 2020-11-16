import express from 'express'
import { resolve } from 'path'

const app = express()

app.use(express.static(resolve(__dirname, '..', '..', '..', 'public')))
app.set('views', resolve(__dirname, '..', '..', '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('views engine', 'html')

app.use('/static', express.static(resolve(__dirname, '..', '..', 'uploads')))

const pathFiles = [
    { path: '/registrar', file: 'register' },
    { path: '/personagens', file: 'characters' },
    { path: '/jogo', file: 'game' }
]

pathFiles.map(({ path, file }) => {
    app.use(path, (req, res) => res.render(`${file}.html`))
})

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    if (err) {
        err.status = 404
        next(err)
    }
});

app.use('/', (req, res) => {
    res.render('index.html')
})





export default app