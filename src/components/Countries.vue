<template>
  <div>
    <h1>Where in the world?</h1>
    <input placeholder="Search for a country" />
    <select>
      <option
        v-for="region in regions"
        :key="region.value"
        value="region.value"
      >
        {{ region.text }}
      </option>
      >
    </select>
    <div class="row">
      <CountryCard
        v-for="country in countries"
        :key="country.alpha3Code"
        :countries="country"
        class="col col-3"
      ></CountryCard>
    </div>
  </div>
</template>

<script>
// import Countriesservice from "../../services";
import { mapActions, mapState } from "vuex";

import CountryCard from "./CountryCard";
export default {
  name: "Countries",
  components: { CountryCard },
  data() {
    return {
      // countries: [],
    };
  },
  computed: {
    // regions(){
    //   return this.$store.state.regions
    // },
    // countries(){
    //   return this.$store.state.countries
    // }
    ...mapState({
      countries: (state) => state.countries,
      regions: (state) => state.regions
    }),
  },
  methods:{
    ...mapActions([
      'getAllCountries'
    ])
  },
  async mounted() {
    try {
      await this['getAllCountries']()
      console.log('mounted')
      // await this.$store.dispatch('getAllCountries');
      // let response = await Countriesservice.getCountries();
      // this.countries = response.data;
    } catch (error) {
      console.log(error.log);
    } finally {
      //
    }
  },
};
</script>

<style lang="scss" scoped>
</style>