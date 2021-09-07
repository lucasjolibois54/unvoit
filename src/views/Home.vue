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
import HeaderFrontpage from "@/components/frontpage/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/frontpage/HeroFrontpage.vue";
import PricingFrontpage from "@/components/frontpage/PricingFrontpage.vue";
import FrontPageOurOffers from "@/components/frontpage/FrontPageOurOffers.vue";
import FrontPagewhoweare from "@/components/frontpage/FrontPagewhoweare.vue";
import FrontPageContactForm from "@/components/frontpage/FrontPageContactForm.vue";
import FrontPageBlockchain from "@/components/frontpage/FrontPageBlockchain.vue";
import Footer from "@/components/others/Footer.vue";

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
