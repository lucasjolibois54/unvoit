<template>
  <InvoiceModal v-if="invoiceModal" />
  <div id="app" v-cloak>
    <transition name="fade">
      <div
        id="pagetop"
        class="
          bg-indigo-200
          fixed
          z-10
          p-3
          rounded-full
          shadow-xl
          bottom-10
          right-10
          animate-bounce
          cursor-pointer
        "
        v-show="scY > 300"
        @click="toTop"
      >
        <div>
          <svg
            class="w-8 h-8 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </div>
      </div>
    </transition>
  </div>
  <router-view />
</template>

<script>
import { mapState } from "vuex";

import InvoiceModal from "@/components/software/InvoiceModal.vue";

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  components: {
    InvoiceModal,
  },
  computed: {
    ...mapState(["invoiceModal"]),

    ...mapState(["invoiceData"]),
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>

/* width */
::-webkit-scrollbar {
  height: 300px;
  width: .45rem!important;
}

/* Track */
::-webkit-scrollbar-track {
  position: absolute;
    opacity: 0;
    z-index: 1;
    background: rgba(222, 222, 222, .75);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity 0.5s 0.5s ease-out;
    transition: opacity 0.5s 0.5s ease-out;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    position: absolute;
    top: 0;
    left: 0;
        width: .45rem!important;
    height: 8px;
    background: rgba(0, 0, 0, .5);
    border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>
