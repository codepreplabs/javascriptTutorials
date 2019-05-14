async function getWeatherAW(woeid){

    try{
        const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}`);
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperature in ${data.title} stays between ${today.min_temp} and ${todat.max_temp}.`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

getWeatherAW(44418).then(data => {
    console.log(data);
})