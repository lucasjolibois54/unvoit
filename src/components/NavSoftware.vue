<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
      <h2 class="text-4xl font-extrabold h-8 w-auto sm:h-10 flex flex-column">
        UNVOIT
      </h2>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <router-link to="/signin">
        <span class="hidden sm:block">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white transition duration-300 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign out
          </button>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
//components

export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
