<template>
  <div id="app">
    <h1>Bitcoin Price Index</h1>

    <div>{{ info }}</div>

    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else v-for="data in info" :key="data.index" class="name">
        {{ data.name }}
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  created() {},
  mounted() {
    axios
      .get("//cvrapi.dk/api?search=Bevisual" + "&country=dk")
      .then((response) => (this.info = response.data))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>
