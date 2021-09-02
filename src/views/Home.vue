<template>
  <HeaderFrontpage />
  <HeroFrontpage />
  <PricingFrontpage />
</template>

<script>
import HeaderFrontpage from "@/components/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/HeroFrontpage.vue";
import PricingFrontpage from "@/components/PricingFrontpage.vue";

export default {
  name: "Home",
  components: {
    HeaderFrontpage,
    HeroFrontpage,
    PricingFrontpage,
  },
};
</script>

<style></style>
