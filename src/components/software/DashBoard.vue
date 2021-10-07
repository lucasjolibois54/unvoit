<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
  >
    <Sidebar />
    <div class="flex-grow overflow-hidden h-full flex flex-col">
      <div class="flex-grow flex overflow-x-hidden">
        <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <!-- Top dashboard navbar -->

          <div
            class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col border-b border-gray-200  dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0"
          >
            <div class=" w-full items-center">
              <div
                class="flex items-center text-3xl text-gray-900 dark:text-white"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/47341968?v=4"
                  class="w-12 mr-4 rounded-full"
                  alt="profile"
                />
                Andreas Erik Eriksen
                {{ invoiceData.length }}
              </div>
            </div>
            <button
              class="h-8 px-3 py-1 rounded-md shadow text-white bg-blue-500"
              @click="createInvoice"
              type="button"
            >
              Create Invoice
            </button>
          </div>

          <!-- top dashboard buttons navbar -->

          <div class="sm:p-7 p-4">
            <table class="w-full text-left">
              <!-- Table body content -->
              <Invoice
                v-for="(invoice, index) in invoiceData"
                :invoice="invoice"
                :key="index"
              />
            </table>
            <div class="flex w-full mt-5 space-x-2 justify-end">
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                <svg
                  class="w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                1
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none"
              >
                2
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                3
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                4
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                <svg
                  class="w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

//components
import Invoice from "@/components/software/Invoice.vue";
import Sidebar from "@/components/software/Sidebar.vue";

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
    ...mapMutations(["TOGGLE_INVOICE"]),

    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
    createInvoice() {
      this.TOGGLE_INVOICE();
    },
  },
  computed: {
    ...mapState(["modalActive", "invoicesLoaded"]),

    ...mapState(["invoiceData"]),
  },
  name: "Dashboard",
  components: {
    Invoice,
    Sidebar,
  },
};
</script>
