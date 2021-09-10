<template>
  <div id="__next">
    <div
      class="
        sticky
        top-0
        z-40
        lg:z-50
        w-full
        max-w-8xl
        mx-auto
        bg-white
        flex-none flex
      "
    >
      <div
        class="
          flex-none
          pl-4
          sm:pl-6
          xl:pl-8
          flex
          items-center
          border-b border-gray-200
          lg:border-b-0
          lg:w-60
          xl:w-72
        "
      >
        <a class="overflow-hidden w-10 md:w-auto" href="/">
          <span class="text-4xl font-bold">UNVOIT</span>
        </a>
      </div>
      <div
        class="
          flex-auto
          border-b border-gray-200
          h-18
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          lg:mx-6
          lg:px-0
          xl:mx-8
        "
      >
        <button
          type="button"
          class="
            group
            leading-6
            font-medium
            flex
            items-center
            space-x-3
            sm:space-x-4
            hover:text-gray-600
            transition-colors
            duration-200
            w-full
            py-2
          "
        >
          <svg
            width="24"
            height="24"
            fill="none"
            class="
              text-gray-400
              group-hover:text-gray-500
              transition-colors
              duration-200
            "
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span>
            "Search"
            <span class="hidden sm:inline"> for anything</span>
          </span>
          <span
            style="opacity: 1"
            class="
              hidden
              sm:block
              text-gray-400 text-sm
              leading-5
              py-0.5
              px-1.5
              border border-gray-300
              rounded-md
            "
          >
            <span class="sr-only">Press </span>
            <kbd class="font-sans">
              <abbr title="Control" class="no-underline">Ctrl </abbr>
            </kbd>
            <span class="sr-only"> and </span>
            <kbd class="font-sans">K</kbd>
            <span class="sr-only"> to search</span>
          </span>
        </button>
      </div>

      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="
              inline-flex
              justify-center
              w-full
              rounded-md
              border border-gray-300
              shadow-sm
              px-4
              py-2
              bg-white
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-gray-100
              focus:ring-indigo-500
            "
          >
            Options
            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="
              origin-top-right
              absolute
              right-0
              mt-2
              w-56
              rounded-md
              shadow-lg
              bg-white
              ring-1 ring-black ring-opacity-5
              focus:outline-none
            "
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Account settings</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Support</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >License</a
                >
              </MenuItem>
              <form method="POST" action="#">
                <MenuItem v-slot="{ active }">
                  <button
                    type="submit"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm',
                    ]"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
};
</script>

<style scoped></style>
