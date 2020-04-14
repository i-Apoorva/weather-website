const request = require('request');

const forecast=(latitude, longitude, callback) => {
    
    const url ="http://api.weatherstack.com/current?access_key=c43c997921507716cf97bde82234a5e1&query=" +latitude + "," +longitude;
    request({url, json:true}, (err,{body})=> {
        
        if(err) {
            callback('Unable to connect', undefined)
        } else if(body.error) {
            
            callback('Location not found. Try to make another search!', undefined)
        }
        else {
            callback( undefined, 
                body.current.weather_descriptions[0] + ". Temperature is " + body.current.temperature + " degrees. Feels like " + body.current.feelslike + " degrees."
            
            )

        }
    })
}

module.exports= forecast;