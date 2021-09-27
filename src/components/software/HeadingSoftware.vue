<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
      >
        Invoices
      </h2>
      <div
        class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
      >
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <SpeakerphoneIcon
            class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Manage your
          <span class="text-black px-1">{{ invoiceData.length }}</span> invoices
        </div>
      </div>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            ref="filter"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            Filter
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
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Draft</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Pending</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Paid</a
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
                    Clear Filter
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </transition>
      </Menu>

      <span class="hidden sm:block ml-3">
        <button
          @click="createInvoice"
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 transition duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <LinkIcon class="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" />
          Create Invoice
        </button>
      </span>
      <UploadFiles />

      <!-- Dropdown -->
      <Menu as="span" class="ml-3 relative sm:hidden">
        <MenuButton
          class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          More
          <ChevronDownIcon
            class="-mr-1 ml-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </MenuButton>

        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                >Filter</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                ]"
                >Create Invoice</a
              >
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

//components
import UploadFiles from "@/components/software/blockchain/UploadFiles.vue";

import {
  SpeakerphoneIcon,
  ChevronDownIcon,
  LinkIcon,
} from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default {
  data() {
    return {};
  },
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    SpeakerphoneIcon,
    ChevronDownIcon,
    LinkIcon,
    UploadFiles,
  },

  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),
    createInvoice() {
      this.TOGGLE_INVOICE();
    },
  },
  computed: {
    ...mapState(["invoiceData"]),
  },
};
</script>
