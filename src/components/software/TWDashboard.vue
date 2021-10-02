<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
  >
    <!-- Left menu bar -->
    <div
      class="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex"
    >
      <div class="h-16 text-blue-500 flex items-center justify-center">
        <svg
          class="w-9"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 54 33"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">
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
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
        <button
          class="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500"
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

    <div class="flex-grow overflow-hidden h-full flex flex-col">
      <div
        class="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10"
      >
        <!-- Top left Navbar Links -->

        <div class="flex h-full text-gray-600 dark:text-gray-400">
          <a
            href="#"
            class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8"
            >Company</a
          >
          <a
            href="#"
            class="cursor-pointer h-full border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white inline-flex mr-8 items-center"
            >Users</a
          >
          <a
            href="#"
            class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8"
            >Expense Centres</a
          >
          <a
            href="#"
            class="cursor-pointer h-full border-b-2 border-transparent inline-flex items-center"
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
                class="absolute right-0 -mb-0.5 bottom-0 w-2 h-2 rounded-full bg-green-500 border border-white dark:border-gray-900"
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

      <div class="flex-grow flex overflow-x-hidden">
        <!-- left side bar users-panel -->
        <div
          class="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5"
        >
          <div class="text-xs text-gray-400 tracking-wider">USERS</div>
          <div class="relative mt-2">
            <input
              type="text"
              class="pl-8 h-9 bg-transparent border border-gray-300 dark:border-gray-700 dark:text-white w-full rounded-md text-sm"
              placeholder="Search"
            />
            <svg
              viewBox="0 0 24 24"
              class="w-4 absolute text-gray-400 top-1/2 transform translate-x-0.5 -translate-y-1/2 left-2"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div class="space-y-4 mt-3">
            <button
              class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow"
            >
              <div
                class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
                  class="w-7 h-7 mr-2 rounded-full"
                  alt="profile"
                />
                Kathyrn Murphy
              </div>
              <div class="flex items-center w-full">
                <div
                  class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"
                >
                  Design
                </div>
                <div class="ml-auto text-xs text-gray-500">$1,902.00</div>
              </div>
            </button>
            <button
              class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow-lg relative ring-2 ring-blue-500 focus:outline-none"
            >
              <div
                class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/47341968?v=4"
                  class="w-7 h-7 mr-2 rounded-full"
                  alt="profile"
                />
                Andreas Erik Eriksen
              </div>
              <div class="flex items-center w-full">
                <div
                  class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-red-100 text-red-500 rounded-md"
                >
                  Software Development
                </div>
                <div class="ml-auto text-xs text-gray-500">$2,794.00</div>
              </div>
            </button>
            <button
              class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow"
            >
              <div
                class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  class="w-7 h-7 mr-2 rounded-full"
                  alt="profile"
                />
                Albert Flores
              </div>
              <div class="flex items-center w-full">
                <div
                  class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-yellow-100 text-yellow-600 rounded-md"
                >
                  Marketing
                </div>
                <div class="ml-auto text-xs text-gray-400">$0.00</div>
              </div>
            </button>
            <button
              class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow"
            >
              <div
                class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  class="w-7 h-7 mr-2 rounded-full"
                  alt="profile"
                />
                Jane Cooper
              </div>
              <div class="flex items-center w-full">
                <div
                  class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-blue-100 text-blue-500 rounded-md"
                >
                  Design
                </div>
                <div class="ml-auto text-xs text-gray-500">$762.00</div>
              </div>
            </button>
            <button
              class="bg-white p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow"
            >
              <div
                class="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab"
                  class="w-7 h-7 mr-2 rounded-full"
                  alt="profile"
                />
                Ronald Richards
              </div>
              <div class="flex items-center w-full">
                <div
                  class="text-xs py-1 px-2 leading-none dark:bg-gray-900 bg-green-100 text-green-600 rounded-md"
                >
                  Sales
                </div>
                <div class="ml-auto text-xs text-gray-400">$0.00</div>
              </div>
            </button>
          </div>
        </div>
        <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <!-- Top dashboard navbar -->

          <div
            class="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0"
          >
            <div class="flex w-full items-center">
              <div
                class="flex items-center text-3xl text-gray-900 dark:text-white"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/47341968?v=4"
                  class="w-12 mr-4 rounded-full"
                  alt="profile"
                />
                Andreas Erik Eriksen
              </div>
              <div class="ml-auto sm:flex hidden items-center justify-end">
                <div class="text-right">
                  <div class="text-xs text-gray-400 dark:text-gray-400">
                    Account balance:
                  </div>
                  <div class="text-gray-900 text-lg dark:text-white">
                    $2,794.00
                  </div>
                </div>
                <button
                  class="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="w-4"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:mt-7 mt-4">
              <a
                href="#"
                class="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5"
                >Activities</a
              >
              <a
                href="#"
                class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5"
                >Transfer</a
              >
              <a
                href="#"
                class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                >Budgets</a
              >
              <a
                href="#"
                class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                >Notifications</a
              >
              <a
                href="#"
                class="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                >Cards</a
              >
            </div>
          </div>

          <!-- top dashboard buttons navbar -->

          <div class="sm:p-7 p-4">
            <div class="flex w-full items-center mb-7">
              <button
                class="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 mr-2 text-gray-400 dark:text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Last 30 days
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <button
                class="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-gray-800 border border-gray-200 leading-none py-0"
              >
                Filter by
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 ml-1.5 text-gray-400 dark:text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <!-- Pages -->

              <div
                class="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center"
              >
                <span class="mr-3">Page 2 of 4</span>
                <button
                  class="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0"
                >
                  <svg
                    class="w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0"
                >
                  <svg
                    class="w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Dashboard table headers -->

            <table class="w-full text-left">
              <thead>
                <tr class="text-gray-400">
                  <th
                    class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                  >
                    Type
                  </th>
                  <th
                    class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                  >
                    Where
                  </th>
                  <th
                    class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell"
                  >
                    Description
                  </th>
                  <th
                    class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800"
                  >
                    Amount
                  </th>
                  <th
                    class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 sm:text-gray-400 text-white"
                  >
                    Date
                  </th>
                </tr>
              </thead>

              <!-- Table body content -->
              <Invoice
                v-for="(invoice, index) in invoiceData"
                :invoice="invoice"
                :key="index"
              />
            </table>
            <div class="flex w-full mt-5 space-x-2 justify-end">
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                <svg
                  class="w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                1
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white leading-none"
              >
                2
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                3
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                4
              </button>
              <button
                class="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none"
              >
                <svg
                  class="w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

//components
import Invoice from "@/components/software/Invoice.vue";

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
  components: {
    Invoice,
  },
};
</script>
