
<template>
<div class="bg-darker-blue">
  <Popover class="z-10 relative bg-darker-blue">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-transparent
          py-6
          lg:justify-start
          lg:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <div class="flex h-10">
              <h2
                class="text-3xl md:text-4xl font-extrabold w-auto h-8 flex text-off-white"
              >
               <router-link to="/">
                UNVOIT
                </router-link>
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
        <div class="-mr-2 -my-2 ">

        </div>

        <div class=" lg:flex items-center justify-end lg:flex-1 lg:w-0">
          <router-link
            class="
              whitespace-nowrap
              text-base
              font-medium
              text-regular-blue
              hover:border-blue-100
              hover:text-blue-100
              border-2 border-regular-blue
              px-4
              py-2
              rounded-full
            "
            to="/signin"
            >Sign in</router-link
          >
          <router-link
            class="
              ml-1
              md: ml-4
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-4
              py-1
              md: py-2
              border-2
              rounded-full
              shadow-sm
              text-base
              font-medium
              text-regular-green
              border-regular-green
              hover:text-green-100
              hover:border-green-100
              bg-transparent
              hover:bg-transparent
            "
            to="/signup"
            >Sign up</router-link
          >
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
     



    </transition>

  </Popover>
  </div>
</template>



