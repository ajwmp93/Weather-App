const searchBox = document.querySelector('.search-box');
const resultBox = document.querySelector('.result-box');
const dailyForecast = document.querySelector('.daily-forecast');
const fiveDayForecast = document.querySelector('.five-day-forecast');
const cityInput = document.querySelector('#cityInput');

cityInput.addEventListener('input', function() {
    const cityName = cityInput.ariaValueMax.trim();
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('q', cityName);

    const newUrl = winodw.location.pathname + '?' + searchParams.toString();
    window.history.replaceState({}, '', newUrl);
})

const searchButton = 
function search(cityName) {
    const searchParams = new URLSearchParams(window.location.search);
    const cityName = searchParams.get('q');

    search(cityName);
    console.log(cityName);

    fetch ('http://api.openweathermap.org/geo/1.0/direct?q=&limit=6&appid=5ad5f33cbd9539e1c734af39ba928ca2')
        .then(function(response) {
            return response.json();
        })
        .then(function(cityName){
            if (!cityName || !cityName.results || cityName.results.length === 0) {
                console.log('No results returned')
                return;
            }

            cityName.results.forEach(function(forecast) {
                createResultCard(forecast);
            })
        })
}