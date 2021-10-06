<template>
  <section class="py-1 bg-dark-grey">
    <div class="w-full lg:w-4/6 px-4 mx-auto mt-6">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          border-0
        "
      >
        <div class="justify-between flex rounded-lg">
          <div class="text-center flex">
            <div
              class="bg-black text-center flex justify-between space-x-10 m-8 p-3 rounded-lg"
            >
              <h6 class="text-white text-xl font-bold">1</h6>
              <h6 class="text-white text-xl font-bold">2</h6>
              <h6 class="text-white text-xl font-bold">3</h6>
              <h6 class="text-white text-xl font-bold">4</h6>
            </div>
          </div>
          <button
            class="
            text-white
            active:bg-pink-600
            font-medium
            uppercase
            text-4xl
            px-4
            py-2
            rounded
            hover:shadow-md
            outline-none
            focus:outline-none
            mr-1
            ease-linear
            transition-all
            duration-150
          "
            type="button"
          >
            <span class="text-sm text-gray-500 flex">
              #{{ currentInvoice.invoiceId }}
            </span>
            UNVOIT
          </button>
        </div>
        <div class="flex-auto px-10 py-10 pt-12">
          <form>
            <div class="flex flex-wrap">
              <div class="w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <h6 class="text-lg text-white mt-3 mb-6 font-bold uppercase">
                    Bill From:
                  </h6>
                  <div
                    class="
                      border-0
                      py-3
                      placeholder-blueGray-300
                      text-white
                      rounded
                      text-lg
                      focus:outline-none
                      focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150"
                  >
                    <p>{{ currentInvoice.billerAddress }}</p>
                    <p>
                      {{ currentInvoice.billerPostalCode }}
                      {{ currentInvoice.billerCity }}
                    </p>
                    <p>{{ currentInvoice.billerCountry }}</p>
                  </div>
                </div>
              </div>

              <span
                class="h-56 border mr-24 border-gray-500 transform rotate-180"
              />

              <div class="">
                <div class="relative w-full mb-3">
                  <h6 class="text-lg text-white mt-3 mb-6 font-bold uppercase">
                    Bill To:
                  </h6>
                  <div
                    class="
                      border-0
                      py-3
                      placeholder-blueGray-300
                      text-white
                      rounded
                      text-lg
                      focus:outline-none
                      focus:ring
                      w-full
                      ease-linear
                      transition-all
                      duration-150"
                  >
                    <p>{{ currentInvoice.clientName }}</p>
                    <p>
                      {{ currentInvoice.clientAddress }}
                    </p>
                    <p>
                      {{ currentInvoice.clientPostalCode }}
                      {{ currentInvoice.clientCity }}
                    </p>
                    <p>{{ currentInvoice.clientCountry }}</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-light-grey">
    <div class="w-full lg:w-4/6 px-4 mx-auto">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          border-0
        "
      >
        <div class="flex flex-wrap w-full mt-8">
          <table class="w-full text-left">
            <thead>
              <tr class="text-gray-400">
                <th
                  class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                >
                  Item
                </th>
                <th
                  class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                >
                  Cost
                </th>
                <th
                  class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell"
                >
                  QTY
                </th>
                <th
                  class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                >
                  Total
                </th>
              </tr>
            </thead>
            <InvoiceItemList />
          </table>
        </div>
      </div>
    </div>
  </section>
  <div id="invoice">
    <div v-if="currentInvoice" class="invoice-view container">
      <div class="px-4 py-5 sm:px-6">
        <router-link :to="{ name: 'Dashboard' }">
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
        <h3 class="text-lg px-4 leading-6 font-medium text-gray-900">Status</h3>
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
            class="
              mt-1
              max-w-2xl
              text-sm text-white
              bg-indigo-500
              px-3
              py-1
              rounded-md
            "
            @click="toggleEditInvoice"
          >
            Duplicate
          </button>
          <button
            class="
              mt-1
              max-w-2xl
              text-sm text-white
              bg-red-500
              px-3
              py-1
              rounded-md
            "
            @click="deleteInvoice(currentInvoice.docId)"
          >
            Delete
          </button>
          <DownloadFiles
            class="btn btn-primary"
            dom="#invoice"
            name="myFilename.pdf"
          />
        </div>
      </div>
    </div>

    <!-- Tailwind lists -->

    <div class="px-4 py-5 sm:px-6 bg-white overflow-hidden sm:rounded-lg">
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Biller Information
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>{{ currentInvoice.billerAddress }}</p>
              <p>{{ currentInvoice.billerCountry }}</p>
              <p>{{ currentInvoice.billerCity }}</p>
              <p>{{ currentInvoice.billerState }}</p>
              <p>{{ currentInvoice.billerPostalCode }}</p>
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">
              Client Information
            </dt>
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
            <dt class="text-sm font-medium text-gray-500">
              Payment Information
            </dt>
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
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
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
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

//components
import DownloadFiles from "@/components/software/blockchain/DownloadFiles.vue";
import InvoiceItemList from "@/components/software/InvoiceItemList.vue";

export default {
  name: "invoiceView",
  components: {
    DownloadFiles,
    InvoiceItemList,
  },
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
