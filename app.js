const request = require('request')

// const url = 'https://api.darksky.net/forecast/70a73f27d015d386b7a3f15181fca48d/37.8267,-122.4233?units=si'

// request({ url: url,json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect to network");
//     }else if(response.body.error){
//         console.log("Unable to find location");
//     }else{
//         const current = response.body.currently;
//         console.log("It is currently "+current.temperature+" degrees out. There is a "+current.precipProbability+"% chance of rain.")
//     }
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/bangalore.json?access_token=pk.eyJ1IjoibWFja3NoYW0iLCJhIjoiY2p5YmU4d3hxMDdnMTNicW16dm1jbzd0aCJ9.u2hSsmM8gf4HS89tPvgLrA&limit=1'

request({ url: geocodeURL,json:true},(error,response)=>{
    // console.log(error);
    if(error){
        console.log("Unable to connect to network");
    }if(response.body.features.length == 0){
        console.log("Unable to find location");
    }else{
        // console.log(response);
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log("Latitude : "+latitude);
        console.log("Longitute : "+longitude);
    } 
})