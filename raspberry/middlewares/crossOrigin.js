var crossOrigin = (request, response, next) => {
    response.set('Access-Control-Allow-Origin', '*')
    next()
}

module.exports.crossOrigin = crossOrigin