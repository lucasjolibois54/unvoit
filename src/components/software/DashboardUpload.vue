<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
  >
    <Sidebar />
    <div class="flex-grow overflow-hidden h-full sm:flex sm:flex-col">
      <div class="flex-grow flex overflow-x-hidden p-20 pl-40 mt-12">
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
            <div style="width: 29rem" class="overflow-hidden h-6 text-xs flex rounded bg-regular-blue bg-opacity-20 mt-10">
              <div style="width:30%"
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
          <div class="max-w-screen-xl">
            <div class="flex">
              <div class="w-full px-4 mr-20">
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
              <div class="w-full px-2 ">
                <div class="bg-grey h-full rounded-md">
                  <div class="sm:p-7">

              <!-- Table body content -->
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
      <div
        class="h-16 lg:flex w-full hidden"
      >
        <!-- Top right navbar links -->

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
