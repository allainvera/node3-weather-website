const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d85104b5b985347cac33216d0708ec80&query='+ latitude +','+ longitude +'&units=m'

    request({url: url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.error){
            callback('Unable to find location. Try another search.', undefined)
        }else {
            callback(undefined,
                `The weather forecast for today is ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees outside.`)
        }
    })
}

module.exports = forecast