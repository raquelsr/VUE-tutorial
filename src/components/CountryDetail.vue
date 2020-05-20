<template>
<div>
  <h1>{{code}} details</h1>
  <div v-if="country">
    <p>{{country.name}}</p>
    <p>{{country.region}}</p>
    <p>Capital {{country.capital}}</p>
    <p>Population: {{country.population}}</p>
  </div>
  <div v-else>
    <p>No data</p>
  </div>

</div>
</template>

<script>

export default {
  name: 'CountryDetail',
  created() {
    this.code = this.$route.params.countryCode;
    this.country = this.$route.query.country;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: blue;
  background-color: orange;
}
</style>
