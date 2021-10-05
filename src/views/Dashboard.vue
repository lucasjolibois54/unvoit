<template>
  <DashBoard />
</template>

<script>
import DashBoard from "@/components/software/DashBoard.vue";

export default {
  name: "Home",
  components: {
    DashBoard,
  },
};
</script>

<style scoped>
.router-link-exact-active {
  background-color: #dbeafe;
  color: #3b82f6;
  border-radius: 0.375rem;
}
</style>

<!--
<template>
  <div v-if="!mobile">
    <Banner />
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8 ">
      <CvrSearch />
      <Modal v-if="modalActive" />
      <NavSoftware class="px-6 pb-10" />
      <HeadingSoftware class="px-6 py-14 pt-24" />
      <TableHeader />
      <div v-if="invoiceData.length > 0">
        <Invoice
          v-for="(invoice, index) in invoiceData"
          :invoice="invoice"
          :key="index"
        />
      </div>
      <div v-else class="empty flex flex-col">
        <img
          class="mx-24 h-48 w-auto mt-16"
          :src="require('@/assets/images/illustration_addinvoice.svg')"
        />
        <h3
          class="px-6 py-3 text-center text-md font-semibold text-black tracking-wider"
        >
          There is nothing here
        </h3>
        <p
          class="px-6 text-center text-xs font-medium text-black tracking-wider"
        >
          Click the Create Invoice button and<br />
          get started
        </p>
      </div>
    </div>
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
import { mapState, mapActions } from "vuex";

//components
import NavSoftware from "@/components/software/NavSoftware.vue";
import HeadingSoftware from "@/components/software/HeadingSoftware.vue";
import Modal from "@/components/others/Modal.vue";
import TableHeader from "@/components/software/TableHeader.vue";
import Invoice from "@/components/software/Invoice.vue";
import CvrSearch from "@/components/software/CvrSearch.vue";

//other components
import Banner from "@/components/others/Banner.vue";

export default {
  data() {
    return {
      mobile: null,
    };
  },
  created() {
    this.GET_INVOICES();
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    ...mapActions(["GET_INVOICES"]),

    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
  computed: {
    ...mapState(["modalActive", "invoicesLoaded"]),

    ...mapState(["invoiceData"]),
  },
  name: "Member",
  components: {
    NavSoftware,
    HeadingSoftware,
    Banner,
    Modal,
    TableHeader,
    Invoice,
    CvrSearch,
  },
};
</script>

<style>
/* animated invoice */

.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}

.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-700px);
}
</style>
-->
