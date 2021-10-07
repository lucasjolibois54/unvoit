<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
  >
    <Sidebar />
    <div class="flex-grow overflow-hidden h-full sm:flex sm:flex-col lg:ml-32 lg:mt-32 lg:mr-32">
      <div class="flex-grow flex overflow-x-hidden mt-12">
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
              top-0
            "
          >
            <div class="w-full items-center">
              <div
                class="flex items-center text-3xl text-gray-900 dark:text-white"
              >
                Blockchain Storage
              </div>
            </div>
            <div
              class="
                items-center
                mt-1
                pb-12
                text-sm text-gray-400
                dark:text-white
              "
            >
              Upload your invoices to Blockchain
            <div style="width: 45%" class="overflow-hidden h-6 text-xs flex rounded bg-regular-blue bg-opacity-20 mt-10">
              <div style="width: 30%"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-regular-blue">
              </div>
            </div>
            <div class="
                items-center
                mt-2
                text-sm text-gray-400
                dark:text-white"
                >
                2GB of 10GB used
              
            </div>
          </div>
        </div>

          <!-- grid start-->
          <div class="max-w-full lg:w-full">
            <div class="lg:flex">
              <div class="w-full px-4 mr-20 mb-10">
                <div
                  class="
                    bg-grey-light
                    lg:flex-row
                    h-full
                    bg-regular-blue
                    bg-opacity-10
                    border-4 border-regular-blue
                    rounded-md
                  "
                >
                <UploadFiles />
                </div>
              </div>

              <!-- Table body content -->
              <div class="w-full bg-off-white rounded-md sm:ml-4 sm:mb-10">
                <div class="bg-grey h-full">
                  <div class="sm:p-8">

                <div class="sm:rounded-md">
                  <ul class="-mt-8">
                    <li>
                      <a class="block -mb-4">
                        <div class="py-2 sm:px-6">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-thin text-darker-grey">
                              #1795474
                            </p>
                          </div>
                          <div class="flex justify-between">
                            <p class="text-lg font-bold">Google, inc.</p>
                            <p class="font-bold text-lg">$744,00</p>
                            <button
                              class="w-8 h-8 ml-4 shadow rounded-full flex items-center justify-center"
                            >
                            <img
                        class="w-6"
                        :src="require('@/assets/downloadpdf.svg')"
                      />
                            </button>
                          </div>
                          <div class="sm:flex sm:justify-between">
                            <div class="sm:flex">
                              <p class="flex items-center text-sm font-light">
                                <time datetime="2020-01-07">4 Apr, 2021</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a class="block -mb-6">
                        <div class="px-4 py-4 sm:px-6">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-thin text-darker-grey">
                              #1795474
                            </p>
                          </div>
                          <div class="flex justify-between">
                            <p class="text-lg font-bold">Google, inc.</p>
                            <p class="font-bold text-lg">$744,00</p>
                            <button
                              class="w-8 h-8 ml-4 shadow rounded-full flex items-center justify-center"
                            >
                            <img
                        class="w-6"
                        :src="require('@/assets/downloadpdf.svg')"
                      />
                            </button>
                          </div>
                          <div class="sm:flex sm:justify-between">
                            <div class="sm:flex">
                              <p class="flex items-center text-sm font-light text-gray-500">
                                <time datetime="2020-01-07">4 Apr, 2021</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a class="block -mb-6">
                        <div class="px-4 py-4 sm:px-6">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-thin text-darker-grey">
                              #1795474
                            </p>
                          </div>
                          <div class="flex justify-between">
                            <p class="text-lg font-bold">Google, inc.</p>
                            <p class="font-bold text-lg">$744,00</p>
                            <button
                              class="w-8 h-8 ml-4 shadow rounded-full flex items-center justify-center"
                            >
                            <img
                        class="w-6"
                        :src="require('@/assets/downloadpdf.svg')"
                      />
                            </button>
                          </div>
                          <div class="sm:flex sm:justify-between">
                            <div class="sm:flex">
                              <p class="flex items-center text-sm font-light text-gray-500">
                                <time datetime="2020-01-07">4 Apr, 2021</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="block -mb-6">
                        <div class="px-4 py-4 sm:px-6">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-thin text-darker-grey">
                              #1795474
                            </p>
                          </div>
                          <div class="flex justify-between">
                            <p class="text-lg font-bold">Google, inc.</p>
                            <p class="font-bold text-lg">$744,00</p>
                            <button
                              class="w-8 h-8 ml-4 shadow rounded-full flex items-center justify-center"
                            >
                            <img
                        class="w-6"
                        :src="require('@/assets/downloadpdf.svg')"
                      />
                            </button>
                          </div>
                          <div class="sm:flex sm:justify-between">
                            <div class="sm:flex">
                              <p class="flex items-center text-sm font-light text-gray-500">
                                <time datetime="2020-01-07">4 Apr, 2021</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a class="block ">
                        <div class="px-4 py-4 sm:px-6 -mb-6">
                          <div class="flex items-center justify-between">
                            <p class="text-sm font-thin text-darker-grey">
                              #1795474
                            </p>
                          </div>
                          <div class="flex justify-between">
                            <p class="text-lg font-bold">Google, inc.</p>
                            <p class="font-bold text-lg">$744,00</p>
                            <button
                              class="w-8 h-8 ml-4 shadow rounded-full flex items-center justify-center"
                            >
                            <img
                        class="w-6"
                        :src="require('@/assets/downloadpdf.svg')"
                      />
                            </button>
                          </div>
                          <div class="sm:flex sm:justify-between">
                            <div class="sm:flex">
                              <p class="flex items-center text-sm font-light text-gray-500">
                                <time datetime="2020-01-07">4 Apr, 2021</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                
              
                  </ul>      
                </div>
           
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- grid slut -->
        </div>
      </div>
    </div>
    <div class="flex-grow overflow-hidden h-full flex flex-col">
      
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
