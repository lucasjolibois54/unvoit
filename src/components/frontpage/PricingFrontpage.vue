<!-- This example requires Tailwind CSS v2.0+ -->
<template>

        <div class="">
          <img
            class=" h-auto w-full "
            :src="require('@/assets/bg-pricing.png')"
            alt=""
          />
        </div>

  <div class="z-0 relative bg-gradient-to-t from-darker-blue via-pricing-blue-200 via-pricing-whiteblue-500 to-pricing-whiteblue overflow-hidden pb-60 pt-30">
    <div class="max-w-7xl mx-auto">
      <div
        class="
          relative
          z-10
          pb-8
          sm:pb-16
          md:pb-20
          lg:max-w-2xl
          lg:w-full
          lg:pb-28
          xl:pb-32
        "
      >
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-48
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        ></svg>

        <main
          class="
            mt-10
            mx-auto
            max-w-7xl
            px-4
            sm:mt-12
            sm:px-6
            md:mt-16
            lg:mt-20
            lg:px-8
            xl:mt-28
          "
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="
                text-3xl
                tracking-tight
                font-medium
                text-darker-blue
                sm:text-4xl
                md:text-5xl
              "
            >
              <span class="block xl:inline"
                >Choose a plan that <br> fits
                <span class="text-regular-blue">you</span>
              </span>
            </h1>

            <p
              class="
                mt-3
                pt-4
                text-base text-black
                sm:mt-5
                sm:text-lg
                sm:max-w-xl
                sm:mx-auto
                md:mt-5
                md:text-xl
                lg:mx-0
              "
            >
              At unvoit we put you first. Join us now and experience out
              infinite posibilities and features that Unvoit gives you. Start
              today for free!
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow"></div>
            </div>
          </div>
        </main>
      </div>
   
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:-right-48 lg:w-4/6">
      <!--h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full-->
      <div
        class="
          mt-6
          mb-1
          flex flex-col
          bg-white
          px-8
          py-6
          max-w-sm
          mx-auto
          rounded-lg
          shadow-lg
        "
      >
        <div class="mt-1 ">
          <a class="pl-14 text-lg text-gray-700 font-weight:400" href="#"
            >Starter version</a
          >
        </div>
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            class="w-8 h-8 object-cover rounded-full"
            alt="avatar"
          />
          <div class="mt-1">
            <a class="pl-6 text-2xl text-gray-700 font-medium" href="#">Free</a>
          </div>
        </div>
      </div>
      <!-- pro version -->
      <div
        class="
          mt-6
          mb-1
          flex flex-col
          bg-white
          px-8
          py-6
          max-w-sm
          mx-auto
          rounded-lg
          shadow-lg
        "
      >
        <div class="mt-1">
          <a class="pl-14 text-lg text-gray-700 font-weight:400" href="#"
            >Pro version
          </a>
        </div>
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            class="w-8 h-8 object-cover rounded-full"
            alt="avatar"
          />
          <div class="mt-1">
            <a class="pl-6 text-2xl text-gray-700 font-medium" href="#">
              79$/m</a
            >
          </div>
        </div>
      </div>

      <!-- pro version 1 year -->
      <div
        class="
          mt-6
          mb-1
          flex flex-col
          bg-white
          px-8
          py-6
          max-w-sm
          mx-auto
          rounded-lg
          shadow-lg
        "
      >
        <div class="mt-1">
          <a class="pl-14 text-lg text-gray-700 font-weight:400" href="#"
            >Pro version</a
          >
        </div>
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            class="w-8 h-8 object-cover rounded-full"
            alt="avatar"
          />
          <div class="mt-1">
            <a class="pl-6 text-2xl text-gray-700 font-medium" href="#">
              805$/year</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default {
  components: {},
  setup() {
    return {
      navigation,
    };
  },
};


 

</script>
