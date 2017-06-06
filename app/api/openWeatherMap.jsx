var axios = require('axios');

const OPEN_WEATHER_MAP_URL= 'http://api.openweathermap.org/data/2.5/weather?appid=5d26f4595332ca495acdbd55e38a6d17&units=metric';

module.exports = {
    getTemp: function (location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = ` ${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.code && res.data.message){
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp;
            }

        }, function (res) {
                throw new Error(res.data.message);
        });

    }
}


