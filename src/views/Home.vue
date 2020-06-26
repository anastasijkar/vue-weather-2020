<template>
  <section class="home">
    <p>Check the weather! Enter the city name or <strong>leave empty for geolocation</strong></p>
    <div class="home__input-wrapper">
      <input
        v-model="query"
        v-on:keyup.enter="checkWeather"
      />
      <button
        @click="checkWeather"
      >Check</button>
    </div>
    <p class="home__geoloc-status" v-if="geolocStatus">
      {{ geolocStatus }}
    </p>
    <p class="home__fetch-error" v-if="isError">
      Sorry, no weather data for your request :(
    </p>
    <p class="home__loader" v-if="isFetching">Loading...</p>
    <WeatherBlock
      v-if="isSuccess"
      :location="weatherData.name"
      :country="weatherData.sys.country"
      :description="weatherData.weather[0].description"
      :temperature="weatherData.main.temp"
    />
  </section>
</template>

<script>
import WeatherBlock from '../components/WeatherBlock/WeatherBlock'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  mounted () {
    if (!this.isSuccess) this.getWeatherByLocation()
    document.title = 'AirApp'
  },
  data () {
    return {
      geolocStatus: '',
      query: ''
    }
  },
  computed: {
    ...mapState('general', {
      weatherData: 'data',
      isFetching: 'isFetching',
      isError: 'isError',
      isSuccess: 'isSuccess'
    })
  },
  methods: {
    checkWeather () {
      this.geolocStatus = ''
      if (this.query) this.getWeatherByQuery()
      else this.getWeatherByLocation()
    },
    getWeatherByQuery () {
      this.getWeather({
        location: {
          name: this.query
        }
      })
    },
    getWeatherByLocation () {
      if (window.navigator.geolocation) {
        this.geolocStatus = 'Browser supports geolocation. Please wait...'
        window.navigator.geolocation.getCurrentPosition(position => {
          this.geolocStatus = ''
          this.getWeather({
            location: {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            }
          })
        }, err => {
          this.geolocStatus = `A problem occured while geolocating: ${err.message}`
        }, {
          timeout: 5000
        })
      } else {
        this.geolocStatus = 'Cannot geolocate through browser. Sorry :('
      }
    },
    ...mapActions('general', ['getWeather'])
  },
  components: {
    WeatherBlock
  }
}
</script>

<style lang="scss" scoped src="./Home.scss"></style>
