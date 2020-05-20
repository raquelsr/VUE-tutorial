<template>
<div>
  <h1>{{msg}} list</h1>
  <ul>
    <li v-for="country of countries" :key="country.alpha3Code">
      {{country.name}}
      <button v-on:click="showDetails(country)">Ver con boton</button>
        <router-link
          :to="{
            name:'CountryDetail',
            params:{countryCode: country.alpha3Code}
          }"
          >
            <a>Ver con link</a>
        </router-link>
    </li>
  </ul>
</div>
</template>

<script>
import CountryService from '@/services/CountryService';
// eslint-disable-next-line import/extensions
import router from '../router/index.js';

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
          this.countries = response;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    showDetails(country) {
      router.push({ name: 'CountryDetail', params: { countryCode: country.alpha3Code }, query: { country } });
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
