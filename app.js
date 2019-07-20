const request = require('request')

const url = 'https://api.darksky.net/forecast/70a73f27d015d386b7a3f15181fca48d/37.8267,-122.4233'

request({ url: url},(error,response)=>{
    console.log(JSON.parse(response.body))
})