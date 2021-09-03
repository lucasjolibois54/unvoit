<template>
  <HeaderFrontpage />
  <HeroFrontpage />
  <FrontPageOurOffers />
  <PricingFrontpage />
  <FrontPagewhoweare />
  <FrontPageBlockchain />
  <FrontPageContactForm />
  <Footer />
</template>

<script>
import HeaderFrontpage from "@/components/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/HeroFrontpage.vue";
import PricingFrontpage from "@/components/PricingFrontpage.vue";
import FrontPageOurOffers from "@/components/FrontPageOurOffers.vue";
import FrontPagewhoweare from "@/components/FrontPagewhoweare.vue";
import FrontPageContactForm from "@/components/FrontPageContactForm.vue";
import FrontPageBlockchain from "@/components/FrontPageBlockchain.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderFrontpage,
    HeroFrontpage,
    PricingFrontpage,
    FrontPageOurOffers,
    FrontPagewhoweare,
    FrontPageContactForm,
    FrontPageBlockchain,
    Footer,
  },
};
</script>

<style></style>
