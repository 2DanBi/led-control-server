const clc = require('cli-color')
const express = require('express')
const ejs =  require('ejs')
const info = require('./lib/info')

const app = express()

app.set('views',__dirname + '/template')
app.set('view engine', 'ejs')
app.engine('html', ejs.renderFile)
app.use(express.static('public'))

app.get('/', info.log, info.client)
app.get('/ledon', (req, res, next) =>{
    console.log('ID 값이 없음')
    console.log('led on!')
    res.send('on')
})
app.get('/ledon/:id', (req, res, next) =>{
    let id = req.params.id
    console.log('ID 값이 있음')
    console.log('led on!', clc.green(id))
    res.send('on')
})
app.get('/ledoff/:id?', (req, res, next) =>{
    let id = req.params.id
    if (id){
        console.log('ID 값이 있음')
    } else {
        console.log('ID 값이 없음')
    }
    console.log('led off!')
    res.send('off')
})

app.listen(8080, () => {
    console.log(clc.green('Ready Webserver'))
})