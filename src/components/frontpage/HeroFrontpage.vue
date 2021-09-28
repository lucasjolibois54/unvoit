<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="mt-16">
    <div class="bg-darker-blue">
      <div class="z-0 relative bg-darker-blue overflow-hidden pb-10">
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
                    text-off-white
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  <span class="block xl:inline"
                    >THE ACCOUNTING PLATFORM YOU NEED
                  </span>
                </h1>
                <p>
                  {{ " " }}

                  <span
                    class="
                      pt-0
                      text-2xl
                      font-normal
                      block
                      xl:inline
                      text-transparent
                      bg-clip-text bg-gradient-to-br
                      from-regular-blue
                      to-regular-green
                    "
                  >
                    ...and probably deserve
                  </span>
                </p>
                <p
                  class="
                    mt-3
                    pt-4
                    text-base text-off-grey
                    sm:mt-5
                    sm:text-lg
                    sm:max-w-xl
                    sm:mx-auto
                    md:mt-5
                    md:text-xl
                    lg:mx-0
                  "
                >
                  Take your financial accounting to the next level, and create
                  invoices in a safe inviroment 🔒
                </p>
                <div
                  class="
                    mt-5
                    sm:mt-8
                    sm:flex
                    sm:justify-center
                    lg:justify-start
                  "
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
                        bg-regular-blue
                        hover:bg-blue-500
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
                        text-regular-blue
                        bg-gray-100
                        hover:bg-gray-200
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
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:-right-48 lg:w-4/6">
          <!--h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full-->
          <img
            class="h-auto w-full"
            :src="require('@/assets/Tablet-hero.png')"
            alt=""
          />
        </div>
        <div class="">
          <img
            class="max-w-screen-lg mx-auto h-auto w-16"
            :src="require('@/assets/Scroll-icon.png')"
            alt=""
          />
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
