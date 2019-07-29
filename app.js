const request = require('request')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')


// console.log(process.argv);
if(process.argv.length != 3){
    console.log("Please provide valid location")
}else{
    geocode(process.argv[2],(error,data)=>{

        if(error){
            console.log(error)
        }else{
            forecast(data.latitude,data.longitude,(error,foreCastData) => {
                if(error){
                    console.log(error)
                }else{
                    console.log(data.location)
                    console.log(foreCastData.summary+'. It is currently '+foreCastData.temperature+' degrees out. There is a '+foreCastData.rainProbability+'% chances of rain.')
                }
            })
        }
    });
}





