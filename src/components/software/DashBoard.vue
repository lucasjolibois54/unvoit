<template>
  <div>
    <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
      <div
        :class="sidebarOpen ? 'block' : 'hidden'"
        @click="sidebarOpen = false"
        class="
          fixed
          z-20
          inset-0
          bg-black
          opacity-50
          transition-opacity
          lg:hidden
        "
      ></div>

      <div
        :class="
          sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        "
        class="
          fixed
          z-30
          inset-y-0
          left-0
          w-64
          transition
          duration-300
          transform
          bg-darker-blue
          overflow-y-auto
          lg:translate-x-0
          lg:static
          lg:inset-0
        "
      >
        <div class="flex items-center justify-center mt-8">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <router-link to="/">
              <span class="sr-only">Workflow</span>
              <div class="flex h-10">
                <h2
                  class="
                    text-4xl
                    font-extrabold
                    w-auto
                    ml-10
                    h-8
                    flex
                    text-off-white
                  "
                >
                  <router-link to="/"> UNVOIT </router-link>
                  <div class="mt-5">
                    <span
                      class="
                        absolute
                        inline-flex
                        rounded-full
                        h-3
                        w-3
                        bg-off-white
                      "
                    ></span>
                    <span
                      class="
                        animate-ping
                        absolute
                        inline-flex
                        h-3
                        w-3
                        rounded-full
                        bg-gray-400
                        opacity-75
                      "
                    >
                    </span>
                  </div>
                </h2>
              </div>
            </router-link>
          </div>
        </div>

        <nav class="mt-10">
          <a
            class="
              flex
              items-center
              mt-4
              py-2
              px-6
              bg-gray-400 bg-opacity-25
              text-gray-100
            "
            href="/"
          >
            <img
              class="h-auto w-6 h-6 z-0"
              :src="require('@/assets/dashboardicon.svg')"
              alt=""
            />

            <span class="mx-3">Dashboard</span>
          </a>

          <a
            class="
              flex
              items-center
              mt-4
              py-2
              px-6
              text-gray-500
              hover:bg-gray-600 hover:bg-opacity-25
              hover:text-gray-100
            "
            href="/ui-elements"
          >
            <img
              class="h-auto w-6 h-6 z-0"
              :src="require('@/assets/invoiceicon.svg')"
              alt=""
            />

            <span class="mx-3">Invoices</span>
          </a>

          <a
            class="
              flex
              items-center
              mt-4
              py-2
              px-6
              text-gray-500
              hover:bg-gray-600 hover:bg-opacity-25
              hover:text-gray-100
            "
            href="/tables"
          >
            <img
              class="h-auto w-6 h-6 z-0"
              :src="require('@/assets/statisticsicon.svg')"
              alt=""
            />

            <span class="mx-3">Statistics</span>
          </a>

          <a
            class="
              flex
              items-center
              mt-16
              py-2
              px-6
              text-gray-500
              hover:bg-gray-600 hover:bg-opacity-25
              hover:text-gray-100
            "
            href="/forms"
          >
            <img
              class="h-auto w-6 h-6 z-0"
              :src="require('@/assets/accounticon.svg')"
              alt=""
            />

            <span class="mx-3">My account</span>
          </a>
          <a
            class="
              flex
              items-center
              mt-4
              py-2
              px-6
              text-gray-500
              hover:bg-gray-600 hover:bg-opacity-25
              hover:text-gray-100
            "
            href="/forms"
          >
            <img
              class="h-auto w-6 h-6 z-0"
              :src="require('@/assets/settingsicon.svg')"
              alt=""
            />

            <span class="mx-3">Settings</span>
          </a>
          <a
            class="
              flex
              items-center
              lg:mt-60
              xl:mt-96
              py-2
              px-6
              text-gray-500
              hover:bg-gray-600 hover:bg-opacity-25
              hover:text-gray-100
            "
            href="/signin"
          >
            <img
              class="h-auto w-6 h-6 z-0"
              :src="require('@/assets/signouticon.svg')"
              alt=""
            />
            <router-link to="/signin">
              <span class="mx-3"> Sign out </span>
            </router-link>
          </a>
        </nav>
      </div>

      <div class="flex-1 flex flex-col overflow-hidden">
        <header
          class="
            flex
            justify-between
            items-center
            py-4
            px-6
            bg-white
            border-b-4 border-black
          "
        >
          <div class="flex items-center">
            <div class="relative mx-4 lg:mx-0">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <input
                class="
                  form-input
                  w-full
                  rounded-md
                  pl-10
                  pr-4
                  focus:border-indigo-600
                  border-none
                "
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </header>
        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container mx-auto px-6 py-8">
            <h3 class="text-gray-700 text-3xl font-medium">Achievements 🌟</h3>
            <div>
              <div
                class="
                  bg-yellow-500
                  pt-3
                  w-72
                  rounded-md
                  mt-8
                  pb-5
                  hover:bg-darker-orange
                  shadow-lg
                "
              >
                <!--<img
                  class="h-auto w-16 pb-4 pt-0 absolute float-left"
                  :src="require('@/assets/Com.png')"
                  alt=""
                />
                <img
                  class="h-auto w-16 pb-4 pt-0 absolute flex flex-row-reverse"
                  :src="require('@/assets/Com.png')"
                  alt=""
                /> -->
                <div
                  class="
                    text-center
                    flex flex-col
                    justify-center
                    items-center
                    pr-4
                    pl-4
                  "
                >
                  <img
                    class="h-auto w-20 rounded-full pb-4 pt-3"
                    :src="require('@/assets/prestigelogo.svg')"
                    alt=""
                  />
                  <p class="text-xl font-normal text-off-white">
                    You’ve exchanged <br />$1.000.000
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8"></div>

            <div class="flex flex-col pr-10 mt-8">
              <div
                class="
                  -my-2
                  py-2
                  overflow-x-auto
                  sm:-mx-6
                  sm:px-6
                  lg:-mx-8
                  lg:px-8
                "
              >
                <div
                  class="
                    pr-96
                    align-middle
                    inline-block
                    min-w-full
                    overflow-hidden
                    sm:rounded-lg
                  "
                >
                  <table class="min-w-full">
                    <div class="flex">
                      <h1 class="text-gray-700 text-3xl font-medium mb-10">
                        Invoices
                      </h1>
                    </div>

                    <tbody>
                      <tr>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>

                            <div class="ml-4">
                              <div
                                class="
                                  text-sm
                                  leading-5
                                  font-medium
                                  text-gray-900
                                "
                              >
                                Andreas Erik Eriksen
                              </div>
                              <div class="text-sm leading-5 text-gray-500">
                                1234@example.com
                              </div>
                            </div>
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="text-sm leading-5 text-gray-900">
                            Software Engineer
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            Web dev
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                            text-sm
                            leading-5
                            text-gray-500
                          "
                        >
                          Owner
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                            >Active</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>

                            <div class="ml-4">
                              <div
                                class="
                                  text-sm
                                  leading-5
                                  font-medium
                                  text-gray-900
                                "
                              >
                                John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">
                                john@example.com
                              </div>
                            </div>
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="text-sm leading-5 text-gray-900">
                            Software Engineer
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            Web dev
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                            text-sm
                            leading-5
                            text-gray-500
                          "
                        >
                          Owner
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                            >Active</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>

                            <div class="ml-4">
                              <div
                                class="
                                  text-sm
                                  leading-5
                                  font-medium
                                  text-gray-900
                                "
                              >
                                John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">
                                john@example.com
                              </div>
                            </div>
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="text-sm leading-5 text-gray-900">
                            Software Engineer
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            Web dev
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                            text-sm
                            leading-5
                            text-gray-500
                          "
                        >
                          Owner
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                            >Active</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>

                            <div class="ml-4">
                              <div
                                class="
                                  text-sm
                                  leading-5
                                  font-medium
                                  text-gray-900
                                "
                              >
                                John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">
                                john@example.com
                              </div>
                            </div>
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="text-sm leading-5 text-gray-900">
                            Software Engineer
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            Web dev
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                            text-sm
                            leading-5
                            text-gray-500
                          "
                        >
                          Owner
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                            >Active</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img
                                class="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </div>

                            <div class="ml-4">
                              <div
                                class="
                                  text-sm
                                  leading-5
                                  font-medium
                                  text-gray-900
                                "
                              >
                                John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">
                                john@example.com
                              </div>
                            </div>
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <div class="text-sm leading-5 text-gray-900">
                            Software Engineer
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            Web dev
                          </div>
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                            text-sm
                            leading-5
                            text-gray-500
                          "
                        >
                          Owner
                        </td>

                        <td
                          class="
                            px-6
                            py-4
                            whitespace-no-wrap
                            border-b border-gray-200
                          "
                        >
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                            >Active</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
