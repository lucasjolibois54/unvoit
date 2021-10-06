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
              class="
                items-center
                mt-0
                pb-4
                text-sm text-gray-400
                dark:text-white
              "
            >
              Manage your statistical overview
            </div>
          </div>

          <!-- grid start-->

          <div class="flex mb-8">
            <div class="w-1/3 px-2">
              <div
                class="
                  bg-grey-light
                  flex flex-col
                  lg:flex-row
                  h-full
                  bg-off-white
                  shadow-sm
                  rounded-md
                "
              >
                <div class="flex justify-center">
                  <img
                    class="w-60 h-full pb-0 lg:pb-10 lg:pt-10 lg:pl-5"
                    :src="require('@/assets/pie-chart-1.png')"
                  />
                </div>
                <div class="flex justify-center">
                  <h2
                    class="
                      flex
                      justify-center
                      -mt-3
                      lg:mt-0
                      mb-3
                      lg:mb-0
                      flex-col
                      pr-5
                    "
                  >
                    <span class="flex lg:flex-col"
                      ><span class="text-2xl"
                        >Sent<span class="inline-block lg:hidden"
                          >: &nbsp;
                        </span> </span
                      ><span class="text-indigo-700 text-2xl"> 444 </span></span
                    ><span class="flex lg:flex-col">
                      <span class="mt-0 text-2xl"
                        >Recieved<span class="inline-block lg:hidden"
                          >: &nbsp;
                        </span>
                      </span>
                      <span class="text-regular-blue text-2xl">36 </span></span
                    >
                  </h2>
                </div>
              </div>
            </div>
            <div class="w-1/3 px-2">
              <div class="bg-grey h-full bg-off-white rounded-md shadow-sm">
                <div>
                  <div class="flex justify-center">
                    <img
                      class="w-64 h-auto"
                      :src="require('@/assets/pie-chart-1.png')"
                    />
                  </div>
                  <div class="flex justify-center">
                    <button
                      class="
                        bg-indigo-700
                        text-off-white
                        pt-2
                        pb-2
                        pl-4
                        pr-4
                        rounded-md
                        shadow-md
                        mb-2
                        lg:-mt-3
                      "
                    >
                      Try PRO for free
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-1/3 px-2">
              <div class="bg-grey-light h-full">
                <div class="w-3/4 bg-off-white shadow-sm rounded-md">
                  <div
                    class="
                      flex flex-col
                      lg:flex-row
                      pb-4
                      lg:pb-4
                      pt-2
                      pl-2
                      pr-2
                    "
                  >
                    <div class="flex justify-center lg:content-start">
                      <img
                        class="w-24 h-full pt-2 lg:pt-5 pl-1 pr-1"
                        :src="require('@/assets/card-stats.png')"
                        alt=""
                      />
                    </div>

                    <div class="pt-2 lg:pt-8">
                      <div class="flex justify-center lg:content-start">
                        <h2 class="pr-3 pl-4">
                          <span class="flex flex-col">
                            <span class="font-semibold text-2xl">$3,599 </span
                            ><span class="text-thin text-gray-400 text-xs lg:sm"
                              >Earned this month</span
                            ></span
                          >
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 bg-off-white mt-10 shadow-sm rounded-md">
                  nam
                </div>
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
