const express=require('express')
const path=require('path')
const app=express()
const request=require('request')
const covid=require('./utils/covidApi')
const port=process.env.PORT||3000

const publicDirectoryPath=path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

// const value=process.argv[2]
// if(!value){
//   console.log('Enter country name')
// }
// else{
//   covid(value,(error,{dead,confirmed,recovered})=>{
//     if(error){
//       return console.log('Error',error)
//     }
//     console.log("Confirmed",confirmed)
//     console.log("Recovered",recovered)
//     console.log("Deaths",dead)
//   });
// }
app.get('/details',(req,res)=>{
  const country=req.query.country
  if(!country){
    return res.send({
      error:'Country required'
    }
    )
  }
  else{
    covid(country,(error,{confirmed,dead,recovered})=>{
          if(error){
            return res.send({
              error:error
            })
            
          }
          else{
            res.send({
              confirmed:confirmed,
              recovered:recovered,
              dead:dead
            })
          }
          // console.log("Confirmed",confirmed)
          // console.log("Recovered",recovered)
          // console.log("Deaths",dead)

  });
}
})
app.listen(port,()=>{
    console.log('Server running on port '+port)
})
