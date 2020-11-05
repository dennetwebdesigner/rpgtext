import express from 'express'
import { resolve } from 'path'

const app = express()

app.use(express.static(resolve(__dirname, '..', '..', '..', 'public')))
app.set('views', resolve(__dirname, '..', '..', '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('views engine', 'html')

app.use('/static', express.static(resolve(__dirname, '..', '..', 'uploads')))



app.use('/registrar', (req, res) => {
    res.render('register.html')
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