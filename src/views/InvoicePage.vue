<template>
  <div v-if="currentInvoice" class="invoice-view container">
    <div class="px-4 py-5 sm:px-6">
      <router-link :to="{ name: 'Member' }">
        <h3 class="px-2 py-4 bg-black text-white">Go back</h3>
      </router-link>
    </div>
    <!-- Header -->
    <div class="px-6 flex">
      <h3 class="text-lg leading-6 font-medium text-gray-500">
        <p class="text-black uppercase">#{{ currentInvoice.invoiceId }}</p>
      </h3>
    </div>
    <div class="px-4 py-5 flex">
      <h3 class="text-lg px-4 leading-6 font-medium text-gray-900">
        Status
      </h3>
      <h3 class="text-sm leading-6 font-medium text-gray-900">
        <div
          class="status-button flex"
          :class="{
            paid: currentInvoice.invoicePaid,
            draft: currentInvoice.invoiceDraft,
            pending: currentInvoice.invoicePending,
          }"
        >
          <span class="bg-green-400" v-if="currentInvoice.invoicePaid"
            >Paid</span
          >
          <span class="bg-red-400" v-if="currentInvoice.invoiceDraft"
            >Draft</span
          >
          <span class="bg-yellow-400" v-if="currentInvoice.invoicePending"
            >Pending</span
          >
        </div>
      </h3>
      <div class="px-10 space-x-5">
        <button
          class="mt-1 max-w-2xl text-sm text-white bg-indigo-500 px-3 py-1 rounded-md"
          @click="toggleEditInvoice"
        >
          Duplicate
        </button>
        <button
          class="mt-1 max-w-2xl text-sm text-white bg-red-500 px-3 py-1 rounded-md"
          @click="deleteInvoice(currentInvoice.docId)"
        >
          Delete
        </button>
        <button
          class="mt-1 max-w-2xl text-sm text-white bg-green-500 px-3 py-1 rounded-md"
          v-if="currentInvoice.invoicePending"
          @click="updateStatusToPaid(currentInvoice.docId)"
        >
          Mark as Paid
        </button>
        <button
          class="mt-1 max-w-2xl text-sm text-white bg-yellow-500  px-3 py-1 rounded-md"
          v-if="currentInvoice.invoiceDraft || currentInvoice.invoicePaid"
          @click="updateStatusToPending"
        >
          Mark as Pending
        </button>
      </div>
    </div>
  </div>

  <!-- Tailwind lists -->

  <div class=" px-4 py-5 sm:px-6 bg-white overflow-hidden sm:rounded-lg">
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Client Information</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>{{ currentInvoice.clientName }}</p>
            <p>{{ currentInvoice.clientStreetAddress }}</p>
            <p>{{ currentInvoice.clientEmail }}</p>
            <p>{{ currentInvoice.clientCountry }}</p>
            <p>{{ currentInvoice.clientAddress }}</p>
            <p>{{ currentInvoice.clientCity }}</p>
            <p>{{ currentInvoice.clientState }}</p>
            <p>{{ currentInvoice.clientPostalCode }}</p>
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Payment Information</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <h4 class="py-2">
              Invoice Date
              <p>{{ currentInvoice.invoiceDate }}</p>
            </h4>
            <h4 class="py-2">
              Payment Date
              <p>{{ currentInvoice.paymentDueDate }}</p>
            </h4>
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ currentInvoice.productDescription }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Billing Items</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <div
              v-for="(item, index) in currentInvoice.invoiceItemList"
              :key="index"
              class=""
            >
              <p class="py-2 px-2">{{ item.ItemName }}</p>
              <p class="py-2 px-2">Qty:{{ item.qty }}</p>
              <p class="py-2 px-2">Price: ${{ item.price }}</p>
              <p class="py-2 px-2">Total: ${{ item.total }}</p>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

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
      this.$router.push({ name: "Member" });
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
