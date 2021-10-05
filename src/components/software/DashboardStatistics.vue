<template>
  <div
    class="
      bg-gray-100
      dark:bg-gray-900
      dark:text-white
      text-gray-600
      h-screen
      flex
      overflow-hidden
      text-sm
    "
  >
    <Sidebar />
    <div class="flex-grow overflow-hidden h-full flex flex-col">
      <div class="flex-grow flex overflow-x-hidden xl:p-44">
        <div class="flex-grow overflow-y-auto">
          <div
            class="
              sm:px-7
              sm:pt-7
              px-4
              pt-4
              flex flex-col
              w-full
              dark:bg-gray-900
              dark:text-white
              dark:border-gray-800
              sticky
              top-0
            "
          >
            <div class="w-full items-center">
              <div
                class="flex items-center text-3xl text-gray-900 dark:text-white"
              >
                Statistics
              </div>
            </div>
            <div
              class="items-center mt-2 text-sm text-gray-400 dark:text-white"
            >
              Manage your statistical overview
            </div>
          </div>

          <!-- grid start-->

          <div class="flex mb-8 mt-10">
            <div class="w-1/3 px-2">
              <div
                class="
                  bg-grey-light
                  flex flex-col
                  lg:flex-row
                  h-full
                  bg-off-white
                "
              >
                <img
                  class="w-64 h-auto"
                  :src="require('@/assets/pie-chart-1.png')"
                />
                <h2 class="mt-0 lg:mt-14 flex flex-col">
                  <span class="text-2xl">Sent</span
                  ><span class="text-indigo-700 text-2xl"> 444 </span>
                  <span class="mt-3 text-2xl">Recieved</span>
                  <span class="text-regular-blue text-2xl">36 </span>
                </h2>
              </div>
            </div>
            <div class="w-1/3 px-2">
              <div class="bg-grey h-full bg-off-white">nam</div>
            </div>
            <div class="w-1/3 px-2">
              <div class="bg-grey-light h-full">
                <div class="w-1/2 bg-off-white">nam</div>
                <div class="w-1/2 bg-off-white mt-10">nam</div>
              </div>
            </div>
          </div>
          <!-- grid slut -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

//components
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
    Sidebar,
  },
};
</script>
