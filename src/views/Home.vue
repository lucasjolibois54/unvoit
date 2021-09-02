<template>
  <HeaderFrontpage />
  <HeroFrontpage />
  <PricingFrontpage />
  <FrontPageWhoWeAre />
</template>

<script>
import HeaderFrontpage from "@/components/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/HeroFrontpage.vue";
import PricingFrontpage from "@/components/PricingFrontpage.vue";
import FrontPageWhoWeAre from "@/components/FrontPageWhoWeAre.vue";

export default {
  name: "Home",
  components: {
    HeaderFrontpage,
    HeroFrontpage,
    PricingFrontpage,
    FrontPageWhoWeAre,
  },
};
</script>

<style></style>
