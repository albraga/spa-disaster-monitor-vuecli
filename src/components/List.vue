<template>
  <div class="row">
    <div v-cloak class="col-md-4">
      <h3><span class="badge bg-secondary">Desastres</span></h3>
      <ul
        class="list-group list-group-flush"
        :key="country.name"
        v-for="country in this.$root.$data.affectedCountriesDisasters"
      >
        <li class="list-group-item marinho">
          <img
            src="../assets/global-warming.png"
            class="rounded float-left"
            alt="Desastre"
          />
          {{ country.name }}
        </li>
      </ul>
    </div>
    <div v-cloak class="col-md-4">
      <h3><span class="badge bg-secondary">Terremotos</span></h3>
      <ul
        class="list-group list-group-flush"
        :key="earthquake.place"
        v-for="earthquake in earthquakes"
      >
        <li class="list-group-item marinho">
          <img
            src="../assets/earthquake.png"
            class="rounded float-left"
            alt="Terremoto"
          />
          {{ earthquake.place }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: ['earthquakes']
}
</script>

<style scoped>
  .marinho {
    background-color:#75cff0;
  }
</style>