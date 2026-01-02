# Day 2/90 7-Day Weather Forecast & Farming Advice Tool  
**90 Days of Code for Africa — Day 2**

---

## Problem

Smallholder farmers across Africa often rely on **guesswork or rumors** to plan farming activities.

Without accurate weather info:
- Rain destroys newly planted seeds
- Wrong timing leads to low yields
- Irrigation plans fail
- Harvesting happens at the wrong time

This results in **crop losses and unstable income** — even for hardworking farmers.

---

## Solution

A simple web tool that provides **7-day weather forecasts** + **rain prediction** + **weekly farming advice**, based on weather conditions.

Farmers can:
- Select their city
- View the upcoming 7-day forecast
- Understand when to plant, irrigate, or harvest

---

## Tech Used

| Technology | Purpose |
|-----------|----------|
| **HTML + CSS** | User interface |
| **Vanilla JavaScript** | App logic |
| **Open-Meteo API** | Free weather data |
| **JSON (Locations)** | Stores city coordinates |

No frameworks.  
No paid tools.  
Works on low-end phones.

---

## Project Structure
📁 root
├─ index.html
├─ style.css
├─ locations.json
└─ README.md

---

## Setup & Usage

1. Download project files  
2. Open `index.html` in your browser  
3. Select a location → Get 7-day weather forecast  

No installation or backend required.

---

## Core Code Snippets

### **Load Cities From JSON**
```js
fetch("locations.json")
.then(res => res.json())
.then(data => {
  locations = data;
  let select = document.getElementById("locationSelect");

  for (let city in data) {
    select.innerHTML += `<option value="${city}">${city}</option>`;
  }
});
```

## Fetch 7-Day Weather Forecast
```js
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,precipitation_sum&timezone=Africa%2FNairobi`)
.then(res => res.json())
.then(data => {
  const days = data.daily;
  displayForecast(days);
});
```

## Farming Advice Logic

```js
let advice =
rain > 5 ? "Heavy rain — Do not plant. Protect crops." :
rain > 0 ? "Light rain — Good time to sow seeds." :
"No rain — Irrigate field & maintain moisture.";
```

## Example: locations.json
```json
{
  "Nairobi": { "lat": -1.286389, "lon": 36.817223 },
  "Goma": { "lat": -1.6585, "lon": 29.2208 },
  "Kigali": { "lat": -1.9499, "lon": 30.0588 },
  "Lilongwe": { "lat": -13.9626, "lon": 33.7741 },
  "Lusaka": { "lat": -15.3875, "lon": 28.3228 }
}

```

## Farming Advice Guide
Weather Situation	Recommendation
Heavy Rain (>5mm)	Avoid planting, protect field
Light Rain (1–5mm)	Plant seeds, good germination conditions
No Rain (0mm)	Irrigate crops, mulch soil
High Temperature (>32°C)	Shade sensitive crops, reduce water loss

## Demo 

[DEMO](https://moseschirusha.github.io/day-2-weather-forecast)
[Video Tutorial](https://www.youtube.com/watch?v=XHZOoc7aCrI)
[Medium Article](https://moseschirusha.medium.com/day-2-90-weather-forecast-farming-advice-tool-cf6a259cb84a)

## What You Learn in Day 2

- How to use a free API without an API key
- How to display data from JSON
- How to turn weather data into practical advice
- How to build tools that solve real problems

##Why This Matters

This project supports farmers to:

- Reduce risk & losses
- Increase crop yield
- Make data-driven decisions
- Plan weekly farming activities

Data = Power
Access = Dignity
Technology = Opportunity


## Final Message

African farmers deserve tools designed for their reality.
Every line of code is a step toward agricultural independence.

If you use or improve this project, please share it and credit the challenge.
Together, we build. Together, we learn.
