const Forecast = (forecast) => (
    `<h4>
        High: ${forecast.day.maxtemp_f}  
        Low: ${forecast.day.mintemp_f}  
    </h4>
    `
)
export default Forecast;