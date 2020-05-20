<template>
  <div class="home">
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
