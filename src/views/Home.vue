<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CountryList msg="COUNTRIES"></CountryList>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryList from '@/components/CountryList.vue';

export default {
  name: 'Home',
  components: {
    CountryList,
  },
};
</script>
