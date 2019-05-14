function getWeather(woeid){

    fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}`)
    .then(result => {
        console.log(result);
        return result.json();
    })
    .then(data => {

        const today = data.consolidated_weather[0];
        console.log(`Temperature in ${data.title} stays between ${today.min_temp} and ${todat.max_temp}.`)
    })
    .catch(error => console.log(error));
}

getWeather(44418);