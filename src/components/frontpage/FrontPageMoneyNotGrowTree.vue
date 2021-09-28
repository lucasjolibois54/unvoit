
<template>
  <div class="z-0 relative bg-off-white overflow-hidden pb-10 pt-3">
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
                text-regular-green
                sm:text-4xl
                md:text-7xl
              "
            >
              <span class="block xl:inline">Money doesn’t grow on trees </span>
            </h1>
            <p>
              {{ " " }}
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
              Ever since we started the technological era and the finance world
              started to expand into more progressive technological solutions,
              the need for finding better and more secure way of handling
              transactions has had a need for something innovative and
              disruptive. <br /><br />
              team @Unvoit want to create a seemless and affordable invoicing
              software solution for small and big businesses.
            </p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-4/6">
      <!--h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full-->
      <img
        class="h-auto w-full"
        :src="require('@/assets/pc-tree.png')"
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
