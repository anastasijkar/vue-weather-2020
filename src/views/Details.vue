<template>
  <section class="details">
    <p class="details__error" v-if="errorMessage">{{ errorMessage }}</p>
     <p class="details__error" v-else-if="isFetching">Loading...</p>
    <div class="details__wrapper" v-else>
      <div class="details__info">
        <span>
          <strong>Date:</strong> {{ date }}
        </span>
        <span>
          <strong>Location:</strong> {{ location }}
        </span>
      </div>
      <div class="details-table">
        <div class="details-table__header">
          <span>Hour</span>
          <span>Temperature</span>
          <span>Description</span>
        </div>
        <div v-if="weatherData">
          <DetailsRow
            v-for="row in weatherData"
            :key="row.dt"
            :time="row.dt"
            :description="row.weather[0].description"
            :temperature="row.temp"
          />
        </div>
      </div>
    </div>
    <router-link to='/'>Home</router-link>
  </section>
</template>

<script>
import DetailsRow from '../components/DetailsRow/DetailsRow'
import { mapState, mapActions } from 'vuex'

import { formatDate } from '../utils/timeFormat'

export default {
  name: 'Details',
  components: {
    DetailsRow
  },
  mounted () {
    if (this.lat && this.lon) {
      this.getDetails({
        location: {
          lat: this.lat,
          lon: this.lon
        }
      })
    }
    document.title = `${this.location} hourly weather`
  },
  computed: {
    errorMessage () {
      if (!this.lat || !this.lon) {
        return 'No data to show. Please go back to Homepage and try again'
      } else if (this.isError) {
        return 'Sorry, something went wrong with :('
      } else {
        return null
      }
    },
    date () {
      return formatDate(Date.now() / 1000)
    },
    ...mapState('general', {
      lat: state => state.data.coord ? state.data.coord.lat : null,
      lon: state => state.data.coord ? state.data.coord.lon : null,
      location: state => state.data.name
    }),
    ...mapState('details', {
      weatherData: state => state.data.hourly ? state.data.hourly.filter((_, i) => i % 3 === 0) : [],
      isFetching: 'isFetching',
      isError: 'isError',
      isSuccess: 'isSuccess'
    })
  },
  methods: {
    ...mapActions('details', ['getDetails'])
  }
}
</script>

<style lang="scss" scoped src="./Details.scss"></style>
