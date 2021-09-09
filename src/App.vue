<template>
  <div id="app" v-cloak>
    <transition name="fade">
      <div
        id="pagetop"
        class=" bg-indigo-200 fixed z-10 p-3 rounded-full shadow-xl bottom-10 right-10 animate-bounce"
        v-show="scY > 300"
        @click="toTop"
      >
        <div>
          <svg
            class="w-8 h-8"
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
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
