<template>
  <div class="container">
    <img :src="country.flag" :alt="country.name" width="100" height="60" />
    <div><span v-text="country.name"></span></div>
    <div>Native name: <span v-text="country.nativeName"></span></div>
    <div>Population: <span v-text="country.population"></span></div>
    <div>Region: <span v-text="country.region"></span></div>
    <div>Sub region: <span v-text="country.subregion"></span></div>
    <div>Capital: <span v-text="country.capital"></span></div>
    <div>Top level domain: <span v-text="country.topLevelDomain"></span></div>
    <div>
      Currencies:
      <span v-for="currency in country.currencies" :key="currency.code">
        {{ currency.name }}
      </span>
    </div>
    <div>
      Languages:
      <span v-for="language in country.Languages" :key="language.iso639_1">
        {{ language.name }}
      </span>
    </div>
    <div>
      Border countries:
      <button
        v-for="border in country.borders"
        :key="border"
        @click="changeCountry(border)"
      >
        {{ border }}
      </button>
    </div>
  </div>
</template>

<script>
// import CountryService from "../../services";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      // country: [],
    };
  },
  props: ["alpha3Code"],
  async beforeRouteUpdate(to, from, next) {
    try {
      await this['getDetail'](to.params.alpha3Code)
      // await this.$store.dispatch('getDetail', to.params.alpha3Code );
      // let response = await CountryService.getDetail(to.params.alpha3Code);
      // this.country = response.data;
      next();
    } catch (error) {
      next();
    }
  },
  computed:{
    // country(){
    //   return this.$store.state.country
    // }
    ...mapState({
      country: (state) => state.country,
    }),
  },
  async mounted() {
    try {
      await this['getDetail'](this.alpha3Code)
      // await this.$store.dispatch('getDetail', this.alpha3Code );
      // let response = await CountryService.getDetail(this.alpha3Code);
      // this.country = response.data;
    } catch (error) {
      console.log(error.log);
    } finally {
      //
    }
  },
  methods: {
    changeCountry(border) {
      this.$router.push({
        name: "country-detail",
        params: { alpha3Code: border },
      });
    },
    ...mapActions([
      'getDetail'
    ])
  },
};
</script>

<style lang="scss" scoped>
</style>