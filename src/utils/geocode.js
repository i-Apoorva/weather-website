const request = require('request');

const geocode=(address, callback) => {
    const url= "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiaS1hcG9vcnZhIiwiYSI6ImNrOHg2Z2VleTAyenQza25tOWp0NXZ5M3UifQ.pnkUO1_ZkkLaoi0xXVB6Dw&limit=1";
    request({url, json:true}, (err,{body})=> {
        if(err) {
            callback('Unable to connect', undefined)
        } else if(body.features.length ===0) {
            callback('Location not found. Try to make another search!', undefined)
        }
        else {
            callback( undefined, {
               lat: body.features[0].center[1],
               long: body.features[0].center[0],
               location: body.features[0].place_name
            }
            )

        }
    })
}

module.exports= geocode;
