<template>
  <HeaderFrontpage />
  <HeroFrontpage />
  <FrontPageAbout />
  <FrontPageHowWorks />
  <FrontPageMoneyNotGrowTree />
  <PricingFrontpage />
  <FrontPageContactForm />
  <Footer />
</template>

<script>
import HeaderFrontpage from "@/components/frontpage/HeaderFrontpage.vue";
import HeroFrontpage from "@/components/frontpage/HeroFrontpage.vue";
import FrontPageMoneyNotGrowTree from "@/components/frontpage/FrontPageMoneyNotGrowTree.vue";
import PricingFrontpage from "@/components/frontpage/PricingFrontpage.vue";
import FrontPageContactForm from "@/components/frontpage/FrontPageContactForm.vue";
import FrontPageHowWorks from "@/components/frontpage/FrontPageHowWorks.vue";
import FrontPageAbout from "@/components/frontpage/FrontPageAbout.vue";
import Footer from "@/components/others/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderFrontpage,
    HeroFrontpage,
    PricingFrontpage,
    FrontPageContactForm,
    FrontPageAbout,
    FrontPageHowWorks,
    FrontPageMoneyNotGrowTree,
    Footer,
  },
};
</script>

<style></style>
