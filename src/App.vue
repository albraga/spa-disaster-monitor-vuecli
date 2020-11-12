<template>
  <div class="container-md">
    <div class="row">
      <div class="col-md">
        <Map v-if="show" v-bind:earthquakesProps="affectedCountriesEarthquakes" v-bind:disastersProps="affectedCountriesDisasters"/>
        <samp>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></samp>
      </div>
    </div>
  </div>
  <div class="container-md">
    <div class="row">
      <div class="col-md">
        <List v-bind:earthquakes="affectedCountriesEarthquakes"/>
      </div>
    </div>
  </div>
</template>

<script>
import getDisastersAndEarthquakes from './api.js'
import Map from './components/Map.vue'
import List from './components/List.vue'

export default {
  name: "App",
  data() {
    return {
      affectedCountriesDisasters: [],
      affectedCountriesEarthquakes: [],
      show: false
    }
  },
  components: {
    Map,
    List
  },
    created() {
      getDisastersAndEarthquakes().then((disastersAndEarthquakes) => {
        const dis = disastersAndEarthquakes[0]
        const earth = disastersAndEarthquakes[1]
        return [dis, earth]
      }).then((disearth) => {
        this.affectedCountriesDisasters = disearth[0]
        this.affectedCountriesEarthquakes = disearth[1]
        this.show = true
      })
    }
  
}
</script>

<style>
</style>
