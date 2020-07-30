
exports.handler = async function http (req) {
  let city = req.queryStringParameters.city;
  const axios = require('axios');
  
  let weather_api = process.env.WEATHER_API;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api}`
  let res=await axios(url)
  

  return {
    headers:{
      'content-type':'application/json',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    },
    body:JSON.stringify(res.data)
  }
}
