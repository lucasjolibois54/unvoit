<template>
  <HeaderFrontpage />
  <HeroFrontpage />
  <FrontPageHowWorks />
  <PricingFrontpage />
  <FrontPagewhoweare />
  <FrontPageContactForm />
  <Footer />
</template>

<script>
import HeaderFrontpage from "@/components/frontpage/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/frontpage/HeroFrontpage.vue";
import PricingFrontpage from "@/components/frontpage/PricingFrontpage.vue";
import FrontPagewhoweare from "@/components/frontpage/FrontPagewhoweare.vue";
import FrontPageContactForm from "@/components/frontpage/FrontPageContactForm.vue";
import FrontPageHowWorks from "@/components/frontpage/FrontPageHowWorks.vue";
import Footer from "@/components/others/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderFrontpage,
    HeroFrontpage,
    PricingFrontpage,
    FrontPagewhoweare,
    FrontPageContactForm,
    FrontPageHowWorks,
    Footer,
  },
};
</script>

<style></style>
