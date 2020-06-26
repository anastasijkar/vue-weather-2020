<template>
  <div class="weather-block">
    <div class="weather-block__wrapper">
      <div class="weather-block__temp">
        <strong>{{ temperature }}°C</strong>
      </div>
      <div class="weather-block__info">
        <p>
          <strong>Date:</strong> {{ date }}
        </p>
        <p>
          <strong>Location:</strong> {{ location }}, {{ country }}
        </p>
        <p>
          <strong>Description:</strong> {{ description }}
        </p>
      </div>
    </div>
    <div class="weather-block__link-wrapper">
      <router-link to='/details'>More</router-link>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../utils/timeFormat'

export default {
  name: 'WeatherBlock',
  props: {
    location: String,
    country: String,
    description: String,
    temperature: Number
  },
  computed: {
    date: () => formatDate(Date.now() / 1000)
  }
}
</script>

<style lang="scss" scoped src="./WeatherBlock.scss"></style>
