<template>
    
  <div class=" bg-white border-b-2 p-2 flex">
      <router-link to="/">
            <span class="sr-only">Workflow</span>
            <div class="flex h-1 w-1">
              <span
                class="absolute inline-flex rounded-full h-3 w-3 bg-indigo-500"
              ></span>
              <span
                class="
                  animate-ping
                  absolute
                  inline-flex
                  h-3
                  w-3
                  rounded-full
                  bg-indigo-400
                  opacity-75
                "
              >
              </span>
            </div>
            <h2 class="text-xl font-extrabold h-8 w-auto sm:h-10 ml-60 mt-1">UNVOIT</h2>
          </router-link>
    <SearchIcon class="h-10 w-8 text-grey-600 ml-20" />
    <input
      class="w-full h-10 p-2 border-0 border-b mr-40 text-sm"
      type="text"
      placeholder="Search"
    />
    <Menu as="div" class="relative inline-block text-left mr-16">
      <div>
        <MenuButton
          class="
            inline-flex
            justify-center
            w-full
            rounded-md
            border border-gray-300
            shadow-sm
            mt-2
            px-4
            py-1
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
</template>

<script>
import { SearchIcon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

export default {
  components: {
    SearchIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
};
</script>
