const clc = require('cli-color')


exports.log = (req, res, next) => {
    let ip = req.ip
    let agent = req.headers['user-agent']
    console.log('accessed from', clc.red(ip), clc.blue(agent))

    next()
}

exports.client = (req, res, next) => {
    let ip = req.ip
    let agent = req.headers['user-agent']
    let now = new Date()
    let today = (now.getMonth() +1) +'월' +now.getDate() + '일'
    
    res.render('index.html', { 
        today: today,
        ip: ip,
        agent: agent
     })
}