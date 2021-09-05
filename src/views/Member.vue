<template>
  <div v-if="!mobile" class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8 ">
    <NavSoftware class="px-6 pb-10" />
    <HeadingSoftware class="px-6 py-14 pt-24" />
    <TablesSoftware class="px-6 py-2" />
  </div>

  <div v-else class="grid w-full min-h-screen bg-gray-900 place-content-center">
    <h2 class="text-3xl font-bold text-gray-100 text center md:text-6xl">
      Sorry, this app is not supported on Mobile Devices
    </h2>
    <p class="text-2xl text-gray-100 text center md:text-6xl">
      To use this app, please use a Computer or Tablet
    </p>
  </div>
</template>

<script>
import NavSoftware from "@/components/NavSoftware.vue";
import HeadingSoftware from "@/components/HeadingSoftware.vue";
import TablesSoftware from "@/components/TablesSoftware.vue";

export default {
  data() {
    return {
      mobile: null,
    };
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
  name: "Member",
  components: {
    NavSoftware,
    HeadingSoftware,
    TablesSoftware,
  },
};
</script>

<style></style>
