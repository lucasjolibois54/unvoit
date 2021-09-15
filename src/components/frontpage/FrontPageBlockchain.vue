<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="z-0 relative overflow-hidden">
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
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
            lg:text-5xl
          "
        >
          What are <span class="block text-indigo-600 xl:inline">blockchains?</span>
        </h2>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5
                sm:text-lg
                sm:max-w-xl
                sm:mx-auto
                md:mt-5
                md:text-x5
                lg:mx-0
              "
            >
              One key difference between a typical database and a blockchain is
              the way the data is structured. A blockchain collects information
              together in groups, also known as blocks, that hold sets of
              information. Blocks have certain storage capacities and, when
              filled, are chained onto the previously filled block, forming a
              chain of data known as the “blockchain.” All new information that
              follows that freshly added block is compiled into a newly formed
              block that will then also be added to the chain once filled.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            ></div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-10 lg:w-1/2">
      <img
        class="h-72 w-85 object-cover sm:h-72 md:h-52 lg:w-85 lg:h-72 mx-auto"
        src="/assets/images/image.svg"
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
