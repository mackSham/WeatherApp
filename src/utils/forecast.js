const request = require('request')


const forecast = (latitute,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/70a73f27d015d386b7a3f15181fca48d/'+latitute+','+longitude+'?units=si'
    request({ url,json:true},(error,{body})=>{
        if(error){
            callback("Unable to connect to network",undefined);
        }else if(body.error){
            callback("Unable to find location",undefined);
        }else{
            const current = body.currently;
            callback(undefined,{
                summary:current.summary,
                temperature:current.temperature,
                rainProbability : current.precipProbability
            });
        }
    })
}

module.exports = forecast