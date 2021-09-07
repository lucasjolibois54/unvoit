<template>
  <Banner />
  <Navbar />
  <Faq />
  
</template>

<script>
import Banner from "@/components/others/Banner.vue";
import Navbar from "@/components/helpcenter/Navbar.vue";
import Faq from "@/components/helpcenter/Faq.vue";


export default {
  components: {
    Banner,
    Navbar,
    Faq,
  },
};
</script>

<style scoped></style>
