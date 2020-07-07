const request=require('request')
const covid=(country,callback)=>{
var options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country',
  qs: {format: 'json', name: country},
  headers: {
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    'x-rapidapi-key': '82f83e604dmsh10757526e7a67e4p18f8f5jsnbaaf470cf9dc',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
    const res=JSON.parse(response.body)
    if(res===null){
        callback("Enter valid country",undefined)
    }
    else{
        callback(undefined,{
            dead:res[0].deaths,
            recovered:res[0].recovered,
            confirmed:res[0].confirmed
        })
    }

    // console.log(res[0].deaths)
    // console.log(res[0].recovered)
    // console.log(res[0].confirmed)

});
}

module.exports=covid