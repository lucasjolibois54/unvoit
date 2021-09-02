<template>
  <HeaderFrontpage />
  <HeroFrontpage />
  <FrontPageOurOffers />
  <PricingFrontpage />
  <FrontPagewhoweare />
</template>

<script>
import HeaderFrontpage from "@/components/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/HeroFrontpage.vue";
import PricingFrontpage from "@/components/PricingFrontpage.vue";
import FrontPageOurOffers from "@/components/FrontPageOurOffers.vue";
import FrontPagewhoweare from "@/components/FrontPagewhoweare.vue"

export default {
  name: "Home",
  components: {
    HeaderFrontpage,
    HeroFrontpage,
    PricingFrontpage,
    FrontPageOurOffers,
    FrontPagewhoweare,
  },
};
</script>

<style></style>
