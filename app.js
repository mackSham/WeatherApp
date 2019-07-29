const request = require('request')
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

geocode('Allahabad',(error,data)=>{
    console.log(error);
    console.log(data);
});

forecast('25.45','81.85',(error,data) => {
    console.log(error);
    console.log(data);
})



