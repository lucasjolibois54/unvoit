<template>
  <div id="invoice">
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
                <router-link :to="{ name: 'Dashboard' }">
                  <button class="text-white text-xl font-bold">Go back</button>
                </router-link>
                <button
                  @click="toggleEditInvoice"
                  class="text-white text-xl font-bold"
                >
                  Duplicate
                </button>
                <button
                  @click="deleteInvoice(currentInvoice.docId)"
                  class="text-white text-xl font-bold"
                >
                  Delete
                </button>
                <DownloadFiles
                  class="text-white text-xl font-bold"
                  dom="#invoice"
                  name="myFilename.pdf"
                />
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
                    <h6
                      class="text-lg text-white mt-3 mb-6 font-bold uppercase"
                    >
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
                    <h6
                      class="text-lg text-white mt-3 mb-6 font-bold uppercase"
                    >
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
      <div class="w-full lg:w-1/2 mx-auto">
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
            <table class="w-full border-b border-gray-200 mb-8">
              <thead>
                <tr class="text-black text-lg">
                  <th
                    class="font-bold pb-8 border-b border-gray-200 dark:border-gray-800"
                  >
                    Item
                  </th>
                  <th
                    class="font-bold px-24 pb-8 border-b border-gray-200 dark:border-gray-800"
                  >
                    Cost
                  </th>
                  <th
                    class="font-bold px-24 pb-8 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell"
                  >
                    QTY
                  </th>
                  <th
                    class="font-bold px-24 pb-8 border-b border-gray-200 dark:border-gray-800"
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

      <div class="flex justify-center">
        <div class="lol px-0">
          <img
            class="mx-24 h-48 w-auto pb-8"
            :src="require('@/assets/google-img.png')"
          />
        </div>
        <div class="lol">
          <th class="font-medium xl:px-24 pb-8 hidden md:table-cell">
            <span class="flex pb-4">Sent</span>
            <span class="flex pb-4">Payment Terms</span>
            <span class="flex pb-4">Due</span>
            <span class="flex pb-4">
              <p class="font-bold">Subtotal</p>
            </span>
          </th>
          <th class="font-medium px-24 pb-8">
            <span class="flex pb-4">{{ currentInvoice.invoiceDate }}</span>
            <span class="flex pb-4">{{ currentInvoice.paymentTerms }}</span>
            <span class="flex pb-4">{{ currentInvoice.paymentDueDate }}</span>
            <span class="font-bold flex pb-4">
              ${{ currentInvoice.invoiceTotal }}
            </span>
          </th>
        </div>
      </div>
    </section>
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
