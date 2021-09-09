<template>
  <Banner />
  <Navbar />
  <Scrollbar />
</template>

<script>
import Banner from "@/components/others/Banner.vue";
import Navbar from "@/components/helpcenter/Navbar.vue";
import Scrollbar from "@/components/helpcenter/Scrollbar.vue";




export default {
  components: {
    Banner,
    Navbar,
    Scrollbar,
  },
};
</script>

<style scoped></style>
