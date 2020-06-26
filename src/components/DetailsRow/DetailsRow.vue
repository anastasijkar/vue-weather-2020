<template>
  <div class="details-row">
    <span>{{ time | showAsHour }}</span>
    <span>{{ temperature }}°C</span>
    <span :title="description">{{ description }}</span>
  </div>
</template>

<script>
import { getHour } from '../../utils/timeFormat'

export default {
  name: 'DetailsRow',
  props: {
    time: Number,
    description: String,
    temperature: Number
  },
  filters: {
    showAsHour (timestamp) {
      return getHour(timestamp)
    }
  }
}
</script>

<style lang="scss" scoped src="./DetailsRow.scss"></style>
