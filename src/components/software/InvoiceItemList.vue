<template>
  <thead v-for="(item, index) in currentInvoice.invoiceItemList" :key="index">
    <tr class="text-black">
      <th class="font-normal w-full px-3 pt-6 pb-6  ">
        {{ item.ItemName }}
      </th>
      <th class="font-normal px-3 pt-6 pb-6">${{ item.price }}</th>
      <th class="font-normal px-3 pt-6 pb-6 hidden md:table-cell">
        x {{ item.qty }}
      </th>
      <th class="font-normal px-3 pt-6 pb-6 ">${{ item.total }}</th>
    </tr>
  </thead>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

//components

export default {
  name: "invoiceView",
  components: {},
  data() {
    return {
      currentInvoice: null,
    };
  },
  created() {
    this.getCurrentInvoice();
  },
  methods: {
    ...mapMutations([
      "SET_CURRENT_INVOICE",
      "TOGGLE_EDIT_INVOICE",
      "TOGGLE_INVOICE",
    ]),

    ...mapActions(["DELETE_INVOICE"]),

    getCurrentInvoice() {
      this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
      this.currentInvoice = this.currentInvoiceArray[0];
    },

    toggleEditInvoice() {
      this.TOGGLE_EDIT_INVOICE();
      this.TOGGLE_INVOICE();
    },

    async deleteInvoice(docId) {
      await this.DELETE_INVOICE(docId);
      this.$router.push({ name: "Dashboard" });
    },
  },
  computed: {
    ...mapState(["currentInvoiceArray", "editInvoice"]),
  },
  watch: {
    editInvoice() {
      if (!this.editInvoice) {
        this.currentInvoice = this.currentInvoiceArray[0];
      }
    },
  },
};
</script>

<style scoped></style>
