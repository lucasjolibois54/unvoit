<template>
  <div class="bg-white">
    <div
      class="
        max-w-2xl
        mx-auto
        py-24
        px-4
        grid
        items-center
        grid-cols-1
        gap-y-16 gap-x-8
        sm:px-6
        sm:py-32
        lg:max-w-7xl
        lg:px-8
        lg:grid-cols-2
      "
    >
      <div>
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Who are <span class="block text-indigo-600 xl:inline">are?</span>
        </h2>
        <p class="mt-4 text-gray-500">
          We’re a highly skilled team, based in Copenhagen; We have developed
          the future of invoices. Using our system, your business will
          skyrocket. You’ll be able to do everything from managing invoices, to
          create payment requests through links in which your customers can pay
          through. There is nothing we can’t do for you! Sign up now, and let’s
          make your life managing your business a lot easier!
        </p>

        <dl
          class="
            mt-16
            grid grid-cols-1
            gap-x-6 gap-y-10
            sm:grid-cols-2
            sm:gap-y-16
            lg:gap-x-8
          "
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="border-t border-gray-200 pt-4"
          >
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="bg-gray-100 rounded-lg"
        />
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          class="bg-gray-100 rounded-lg"
        />
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
          alt="Side of walnut card tray with card groove and recessed card area."
          class="bg-gray-100 rounded-lg"
        />
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
          alt="Walnut card tray filled with cards and card angled in dedicated groove."
          class="bg-gray-100 rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>