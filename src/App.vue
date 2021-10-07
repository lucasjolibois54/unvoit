<template>
  <InvoiceModal v-if="invoiceModal" />
  <div id="app" v-cloak>
    <transition name="fade">
      <div
        id="pagetop"
        class="
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
        v-show="scY > 900"
        @click="toTop"
      >
        <div>
          <img
            class="w-14 transform rotate-180"
            :src="require('@/assets/Scroll-icon.png')"
            alt=""
          />
        </div>
      </div>
    </transition>
  </div>
  <transition name="route" mode="out-in">
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </transition>
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
#app {
  overflow: hidden;
  width: 100vw;
}

html,
body {
  scroll-behavior: smooth;
}

/* width */
::-webkit-scrollbar {
  display: none;
}

/* Route transitions */

.route-enter-from {
  opacity: 0;
  transform: translateX(2em);
}

.route-enter-active {
  transition: all 0.3s ease;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}

.route-leave-active {
  transition: all 0.3s ease;
}
</style>
