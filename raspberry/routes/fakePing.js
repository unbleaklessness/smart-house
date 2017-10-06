var rnd = require('../helpers').rnd

var init = (app) => {
    app.get('/fake-ping', (request, response) => {
        
        // Temperature Humidity People
        fakeData = `${rnd(26, 29)} ${rnd(16, 20)} ${rnd(0, 3)}`
        
        response.send(fakeData)
    })
}

module.exports.init = init