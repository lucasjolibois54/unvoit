<template>
  <div v-if="!mobile">
    <Banner />
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8 ">
      <CvrSearch />
      <Modal v-if="modalActive" />
      <InvoiceModal v-if="invoiceModal" />
      <NavSoftware class="px-6 pb-10" />
      <HeadingSoftware class="px-6 py-14 pt-24" />
      <TableHeader> </TableHeader>
      <Invoice
        v-for="(invoice, index) in invoiceData"
        :invoice="invoice"
        :key="index"
      />
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
import InvoiceModal from "@/components/software/InvoiceModal.vue";
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
    ...mapState(["invoiceModal", "modalActive", "invoicesLoaded"]),

    ...mapState(["invoiceData"]),
  },
  name: "Member",
  components: {
    NavSoftware,
    HeadingSoftware,
    Banner,
    InvoiceModal,
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
