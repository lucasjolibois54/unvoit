<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
  >
    <Sidebar />
    <div class="flex-grow overflow-hidden h-full flex flex-col">
      <div
        class="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10"
      >
        <!-- Top right navbar links -->

        <div class="ml-auto flex items-center space-x-7">
          <button class="h-8 px-3 rounded-md shadow text-white bg-blue-500">
            Upload Invoice
          </button>

          <button class="flex items-center">
            <span class="relative flex-shrink-0">
              <img
                class="w-7 h-7 rounded-full"
                src="https://avatars.githubusercontent.com/u/47341968?v=4"
                alt="profile"
              />
              <span
                class="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"
              ></span>
            </span>
            <span class="ml-2">Andreas Eriksen</span>
            <svg
              viewBox="0 0 24 24"
              class="w-4 ml-1 flex-shrink-0"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex-grow flex overflow-x-hidden">
        <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <div
            class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0"
          >
            <div class="flex w-full items-center">
              <div
                class="flex items-center text-3xl text-gray-900 dark:text-white"
              >
                <h2 class="w-80 rounded-md p-5 bg-blue-100 text-blue-500">
                  Welcome to your Blockchain Storage,
                  <span class="font-bold">NAME</span>
                </h2>
              </div>
              <div class="ml-auto sm:flex hidden items-center justify-end">
                <div class="text-right">
                  <div class="text-xs text-gray-400 dark:text-gray-400">
                    Account balance:
                  </div>
                  <div class="text-gray-900 text-lg dark:text-white">
                    $2,794.00
                  </div>
                </div>
                <button
                  class="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="w-4"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:mt-7 mt-4" />
          </div>

          <!-- top dashboard buttons navbar -->
          <UploadFiles />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

//components
import Sidebar from "@/components/software/Sidebar.vue";
import UploadFiles from "@/components/software/blockchain/UploadFiles.vue";

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
  name: "Dashboard",
  components: {
    Sidebar,
    UploadFiles,
  },
};
</script>
