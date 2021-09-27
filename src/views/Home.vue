<template>
  <HeaderFrontpage />
  <HeroFrontpage />
  <FrontPageHowWorks />
  <PricingFrontpage />
  <FrontPageContactForm />
  <Footer />
</template>

<script>
import HeaderFrontpage from "@/components/frontpage/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/frontpage/HeroFrontpage.vue";
import PricingFrontpage from "@/components/frontpage/PricingFrontpage.vue";
import FrontPageContactForm from "@/components/frontpage/FrontPageContactForm.vue";
import FrontPageHowWorks from "@/components/frontpage/FrontPageHowWorks.vue";
import Footer from "@/components/others/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderFrontpage,
    HeroFrontpage,
    PricingFrontpage,
    FrontPageContactForm,
    FrontPageHowWorks,
    Footer,
  },
};
</script>

<style></style>
