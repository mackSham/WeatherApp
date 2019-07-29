const request = require('request')


const forecast = (latitute,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/70a73f27d015d386b7a3f15181fca48d/'+latitute+','+longitude+'?units=si'
    request({ url: url,json:true},(error,response)=>{
        if(error){
            callback("Unable to connect to network",undefined);
        }else if(response.body.error){
            callback("Unable to find location",undefined);
        }else{
            const current = response.body.currently;
            callback(undefined,{
                temperature:current.temperature,
                rainProbability : current.precipProbability
            });
        }
    })
}

module.exports = forecast