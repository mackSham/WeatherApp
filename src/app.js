const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const express = require('express')


const app = express();
const port = process.env.PORT || 3000 
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather',(req,res)=>{
    if(!req.query.location){
        return res.send("Location Missing")
    }
    geocode(req.query.location,(error,{latitude,longitude,location}={})=>{

        if(error){
            return res.send(error)
        }else{
            forecast(latitude,longitude,(error,{summary,temperature,rainProbability}) => {
                if(error){
                    return res.send(error)
                }else{
                    return res.send({
                        "location":location,
                        "summary":summary,
                        "temperture":temperature,
                        "rainProbability":rainProbability
                    })
                    // console.log(location)
                    // console.log(summary+'. It is currently '+temperature+' degrees out. There is a '+rainProbability+'% chances of rain.')
                }
            })
        }
    });
})


// console.log(process.argv);
// if(process.argv.length != 3){
//     console.log("Please provide valid location")
// }else{
//     geocode(process.argv[2],(error,{latitude,longitude,location})=>{

//         if(error){
//             console.log(error)
//         }else{
//             forecast(latitude,longitude,(error,{summary,temperature,rainProbability}) => {
//                 if(error){
//                     console.log(error)
//                 }else{
//                     console.log(location)
//                     console.log(summary+'. It is currently '+temperature+' degrees out. There is a '+rainProbability+'% chances of rain.')
//                 }
//             })
//         }
//     });
// }

app.listen(port,() => console.log("Listening on PORT no "+ port))