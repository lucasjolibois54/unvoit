<template>
  <div id="app">
    <h1>Bitcoin Price Index</h1>
    <div>{{ info }}</div>
    <div v-for="item in info" :key="item.name">
      {{ item.name }}
    </div>
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
      .get("https://cvrapi.dk/api?search=bevisual")
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
