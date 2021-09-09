<template>
  <Banner />
  <Navbar />
  <Support />
  <FrequentlyAskedQusetions />
</template>

<script>
import Banner from "@/components/others/Banner.vue";
import Navbar from "@/components/helpcenter/Navbar.vue";
import Support from "@/components/helpcenter/Support.vue";
import FrequentlyAskedQusetions from "@/components/helpcenter/FrequentlyAskedQusetions.vue";


export default {
  components: {
    Banner,
    Navbar,
    Support,
    FrequentlyAskedQusetions,
  },
};
</script>

<style scoped></style>
