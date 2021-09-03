<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-if="!mobile">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <router-link to="/">
        <span class="sr-only">Workflow</span>
        <h2 class="text-4xl font-extrabold h-8 w-auto sm:h-10">
          UNVOIT
        </h2>
      </router-link>
    </div>

    <main>
      <div class="max-w-7xl mx-auto py-20 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-0 py-0 sm:px-0 ">
          <div class="border-2 border-dashed border-gray-200 rounded-lg h-96 ">
            <TablesSoftware class="px-4 py-6" />
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>

  <div v-else class="grid w-full min-h-screen bg-gray-900 place-content-center">
    <h2 class="text-3xl font-bold text-gray-100 text center md:text-6xl">
      Sorry, this app is not supported on Mobile Devices
    </h2>
    <p class="text-2xl text-gray-100 text center md:text-6xl">
      To use this app, please use a Computer or Tablet
    </p>
  </div>
</template>

<script>
//components
import TablesSoftware from "@/components/TablesSoftware.vue";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default {
  data() {
    return {
      mobile: null,
    };
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
    },
  },
  components: {
    TablesSoftware,
  },
  setup() {
    return {
      user,
      navigation,
      userNavigation,
    };
  },
};
</script>
