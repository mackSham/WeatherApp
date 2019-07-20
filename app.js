const request = require('request')

const url = 'https://api.darksky.net/forecast/70a73f27d015d386b7a3f15181fca48d/37.8267,-122.4233?units=si'

request({ url: url,json:true},(error,response)=>{
    const current = response.body.currently;
    console.log("It is currently "+current.temperature+" degrees out. There is a "+current.precipProbability+"% chance of rain.")
})