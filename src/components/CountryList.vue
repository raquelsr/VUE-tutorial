<template>
<div>
  <h1>{{msg}} list</h1>
  <ul>
    <li v-for="country of countries" :key="country.alpha3Code">
      {{country.name}}
    </li>
  </ul>
</div>
</template>

<script>
import CountryService from '@/services/CountryService';

export default {
  name: 'CountryList',
  props: {
    msg: String,
  },
  data() {
    return {
      countries: null,
    };
  },
  methods: {
    showAllCountries() {
      CountryService.getAll()
        .then((response) => {
          this.countries = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.showAllCountries();
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
