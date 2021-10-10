<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
  >
    <!-- Left menu bar -->
    <div
      class="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex"
    >
      <div class="h-16 text-blue-500 flex items-center justify-center">
        <img class="w-9 mt-5 ml-2" :src="require('@/assets/U.svg')" />
      </div>
      <div
        class="flex mx-auto flex-grow mt-4 flex-col  text-gray-400 space-y-4"
      >
        <router-link to="/dashboard">
          <button
            class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center "
          >
            <svg
              viewBox="0 0 24 24"
              class="h-5"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
        </router-link>
        <router-link to="/statistics" active-link="active">
          <button
            class="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              class="h-5"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </button>
        </router-link>
        <router-link to="/upload" active-link="active">
          <button
            class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              class="h-5"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
              ></path>
              <line x1="12" y1="11" x2="12" y2="17"></line>
              <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
          </button>
        </router-link>
        <button
          class="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-5"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

//components

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
  name: "Member",
  components: {},
};
</script>

<style scoped>
.active {
  background-color: #dbeafe;
  color: #3b82f6;
  border-radius: 0.375rem;
}
</style>
