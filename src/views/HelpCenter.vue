<template>
  <Banner />
<div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8 ">
  <Navbar />
  <Scrollbar />
  <Algolia />
  <FAQ />
</div>
</template>

<script>

import Banner from "@/components/others/Banner.vue";
import Navbar from "@/components/helpcenter/Navbar.vue";
import Scrollbar from "@/components/helpcenter/Scrollbar.vue";
import Algolia from "@/components/helpcenter/Algolia.vue";
import FAQ from "@/components/helpcenter/FAQ.vue";




export default {
  components: {
    Banner,
    Navbar,
    Scrollbar,
    Algolia,
    FAQ,
  },
};
</script>

<style scoped></style>
