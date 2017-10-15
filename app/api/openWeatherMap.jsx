var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e066c74d91486e878efcc8115ff3337c&units=metric';

//

module.exports = {
    getTemp : function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        console.log(requestUrl);

        return axios.get(requestUrl).then(function (response) {
            if (response.data) {
                return response.data.main.temp;
            }
        }, function (response) {
            throw new Error(response.response.data.message);
        });
    }
};
