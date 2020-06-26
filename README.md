# vue-weather-app

Test assessment implemented for Appchance recruitment, June 2020.

## Project structure

### components/

| Component | Props | Description |
| --- | --- | --- |
| ***DetailsRow*** | **time:** Number<br>**description:** String<br>**temperature:** Number | A row, containing weather data for a specific hour. |
| ***WeatherBlock*** | **location:** String<br>**country:** String<br>**description:** String<br>**temperature:** Number | A block, representing current weather and location data. |

### store/

Vuex storage.

| Module | Description |
| --- | --- |
| ***general*** | Current weather data.  |
| ***details*** | Detailed weather data.  |

### utils/

Helper functions for the application logic.

#### api.js

| Function | Description |
| --- | --- |
| ***Api.getWeather(location)*** | Requests current weather from OpenWeatherMap API for a given location.<br>**Input:**<br>location: { lat: Number, lon: Number } \|\| { name: String }<br>**Returns:**<br>Promise  |
| ***Api.getDetails(location)*** | Requests hourly weather from OpenWeatherMap API for a given location.<br>**Input:**<br>location: { lat: Number, lon: Number }<br>**Returns:**<br>Promise  |

#### timeFormat.js

| Function | Description |
| --- | --- |
| ***formatDate(timestamp)*** | Converts unix timestamp to human readable date (DD.MM.YYY).<br>**Input:**<br>timestamp: Number<br>**Returns:**<br>String  |
| ***getHour(timestamp)*** | Converts unix timestamp to human readable time (HH:MM).<br>**Input:**<br>timestamp: Number<br>**Returns:**<br>String  |

### views/

Components as a router views.

| Url | Component |
| --- | --- |
| /  | Home.vue, Home.scss  |
| /details  | Details.vue, Details.scss  |

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
