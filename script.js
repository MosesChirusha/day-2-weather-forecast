let locations = {};

fetch("locations.json")
.then(response => response.json())
.then(data => {
    locations = data;

    let select = document.getElementById("locationSelect");

    for(let city in data){
        select.innerHTML += `<option value="${city}">${city} </option>`;
    }
});

function getWeather(){
    let city = document.getElementById("locationSelect").value;
    let { lat , lon } = locations[city];

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`)
    .then(response => response.json())
    .then(data => {

        const days = data.daily;
        document.getElementById("weather").innerHTML = "";
        let rainSum = 0;

        for(let i=0; i<7; i++){
            rainSum += days.precipitation_probability_max[i];

            document.getElementById("weather").innerHTML += `
            <div class="day">
              <h4>${days.time[i]}</h4>
              <ul>
                <li> Max: ${days.temperature_2m_max[i]}°C </li>
                <li> Min: ${days.temperature_2m_min[i]}°C </li>
                <li> Rain: ${days.precipitation_probability_max[i]}% </li>
              </ul>
            </div>
            `;
        }

        let avgRain = rainSum / 7;
        let advice = "";

        if(avgRain > 60){
            advice = `
                <h4>Heavy rain expected this week.</h4>
                <ul>
                    <li>Ideal for planting & transplanting </li>
                    <li>Mulch fields to retain soil nutrients </li>
                    <li>Avoid fertilizer (likely to wash away) </li>
                </ul>
            `;
        }
        else if(avgRain > 30){
            advice = `
            <h4>Moderate rainfall this week.</h4>
            <ul>
                <li>Apply organic fertilizer </li>
                <li>Pest monitoring recommended </li>
                <li>Light irrigation where needed </li>
            </ul>
            
            
            
            `;
        }
        else {
            advice = `
            <h4>Dry conditions expected.</h4>

            <ul>
                <li>Irrigate in early morning/evening </li>
                <li>Best time for harvesting </li>
                <li>Mulching to prevent water loss </li>
            </ul>
            `;
        }

        document.getElementById("advice").innerHTML = `
          <h3> Advice for Farmers in ${city} </h3>
          ${advice}
        `;
    });
}