const request = require('request')


const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWFja3NoYW0iLCJhIjoiY2p5YmU4d3hxMDdnMTNicW16dm1jbzd0aCJ9.u2hSsmM8gf4HS89tPvgLrA&limit=1'
    request({ url,json:true},(error,{body})=>{
        // console.log(error);
        if(error){
            callback("Unable to connect to netwrok",undefined)
        }else if(body.features.length == 0){
            callback("Unable to find location",undefined)
        }else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        } 
    })
}


module.exports = geocode
