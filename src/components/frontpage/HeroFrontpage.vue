<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="z-0 relative bg-darker-blue overflow-hidden">
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
                font-extrabold
                text-gray-900
                sm:text-4xl
                md:text-5xl
              "
            >
              <span class="block xl:inline"
                >Every business has to deal with economics & invoices,
              </span>
              {{ " " }}

              <span class="block text-indigo-600 xl:inline"> be smarter!</span>
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5
                sm:text-lg
                sm:max-w-xl
                sm:mx-auto
                md:mt-5
                md:text-xl
                lg:mx-0
              "
            >
              Manage your invoices safely and keep track on your business'
              economy all for free, no hidden fees.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    md:py-4
                    md:text-lg
                    md:px-10
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:-translate-y-1
                    hover:scale-105
                  "
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-indigo-700
                    bg-indigo-100
                    hover:bg-indigo-200
                    md:py-4
                    md:text-lg
                    md:px-10
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:-translate-y-1
                    hover:scale-105
                  "
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-10 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://res.cloudinary.com/aeeux/image/upload/v1630421601/Diget66/previewed_nv20ka.png"
        alt=""
      />
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
