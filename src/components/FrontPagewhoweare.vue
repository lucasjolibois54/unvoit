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
  { name: "Secure invoice system", description: "We use contracts as a part of our invoice system to avoid mistakes and fraud between companies and customers." },
  {
    name: "Usable for all companies",
    description:
      "It doesn't matter whether you're a start-up company, a freelancer, or represents a huge company. We got all the features you will ever need, and have different plans available.",
  },
  { name: "Blockchain technology", description: "With blockchain technology, we can automatically spot if any error occurs doing sent invoices/payments, based on contracts between both parts." },
  { name: "Good user experience", description: "Our system is easy to use and logically set up, so you don't have to waste more time than necessary." },
  { name: "Financial management", description: "You can control all financial-related things with our system - mostly automatic, so you can focus more on building your business." },
  {
    name: "Up to date features",
    description: "We always have the newest features available, including all the best integrations on the market.",
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