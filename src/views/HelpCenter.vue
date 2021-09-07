<template>
  <Banner />
  <Navbar />
  <HelpCenterHero />
  <Faq />
  
</template>

<script>
import Banner from "@/components/others/Banner.vue";
import Navbar from "@/components/helpcenter/Navbar.vue";
import Faq from "@/components/helpcenter/Faq.vue";
import HelpCenterHero from "@/components/helpcenter/HelpCenterHero";


export default {
  components: {
    Banner,
    Navbar,
    Faq,
    HelpCenterHero,
  },
};
</script>

<style scoped></style>
