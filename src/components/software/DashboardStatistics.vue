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
      <div
        class="
          h-16
          lg:flex
          w-full
          border-b border-gray-200
          dark:border-gray-800
          hidden
          px-10
        "
      >
        <!-- Top left Navbar Links -->

        <div class="flex h-full text-gray-600 dark:text-gray-400">
          <a
            href="#"
            class="
              cursor-pointer
              h-full
              border-b-2 border-transparent
              inline-flex
              items-center
              mr-8
            "
            >Company</a
          >
          <a
            href="#"
            class="
              cursor-pointer
              h-full
              border-b-2 border-blue-500
              text-blue-500
              dark:text-white
              dark:border-white
              inline-flex
              mr-8
              items-center
            "
            >Users</a
          >
          <a
            href="#"
            class="
              cursor-pointer
              h-full
              border-b-2 border-transparent
              inline-flex
              items-center
              mr-8
            "
            >Expense Centres</a
          >
          <a
            href="#"
            class="
              cursor-pointer
              h-full
              border-b-2 border-transparent
              inline-flex
              items-center
            "
            >Currency Exchange</a
          >
        </div>

        <!-- Top right navbar links -->

        <div class="ml-auto flex items-center space-x-7">
          <button class="h-8 px-3 rounded-md shadow text-white bg-blue-500">
            Create Invoice
          </button>

          <button class="flex items-center">
            <span class="relative flex-shrink-0">
              <img
                class="w-7 h-7 rounded-full"
                src="https://avatars.githubusercontent.com/u/47341968?v=4"
                alt="profile"
              />
              <span
                class="
                  absolute
                  right-0
                  -mb-0.5
                  bottom-0
                  w-2
                  h-2
                  rounded-full
                  bg-green-500
                  border border-white
                  dark:border-gray-900
                "
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
      <!-- grid start-->

      <div class="w-3/4 mt-20 grid grid-cols-3 gap-5 lg:w-3/4">
        <div class="bg-off-white rounded-lg">
          <div class="flex">
            <img
              class="w-2/4 h-2/4 mt-5"
              :src="require('@/assets/pie-chart-1.png')"
              alt=""
            />
            <h2 class="mt-10 flex flex-col">
              <span class="text-2xl">Sent</span
              ><span class="text-indigo-700 text-2xl"> 444 </span>
              <span class="mt-3 text-2xl">Recieved</span>
              <span class="text-regular-blue text-2xl">36 </span>
            </h2>
          </div>
        </div>

        <div class="bg-off-white rounded-lg">
          <div>
            <button class="bg-indigo-700 text-off-white p-1">
              Try PRO for free
            </button>
          </div>
        </div>
        <div class="">
          <div class="grid-cols-2">
            <div class="bg-off-white h-28 rounded-lg"><h2>$3,599</h2></div>
            <div class="bg-off-white mt-5 h-28 rounded-lg">
              <h2>670 sent</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- grid slut -->
    </div>
  </div>
</template>

<script>
//components

import Sidebar from "@/components/software/Sidebar.vue";

export default {
  data() {
    return {
      mobile: null,
    };
  },

  name: "Dashboard",
  components: {
    Sidebar,
  },
};
</script>
