<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="
            text-base text-indigo-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          Invoice management & transactions
        </h2>
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            text-gray-900
            lg:text-5xl
          "
        >
          A better way to manage <span class="block text-indigo-600 xl:inline">& send money</span>
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Improve the way you manage your invoices for your business and the way
          your customers pay their bill through custom invoice links that they
          can pay through, through our software. You can start today for free!
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="
            space-y-10
            md:space-y-0
            md:grid md:grid-cols-2
            md:gap-x-8 md:gap-y-10
          "
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/vue/outline";

const features = [
  {
    name: "Economic overview over your business",
    description:
      "User experience based software giving a good economicly overview over your invoices for your business.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "We have the best prices in the industri. You can start managing your business for completely free, no hidden fees. You can always upgrade to a plan based subscription if you need to be able to send invoice requests.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Using blockchains your cusotmers payments will get payed instantly and securely.",
    icon: LightningBoltIcon,
  },
  {
    name: "Support from professionals",
    description:
      "If you need guidance through your journey managing your business using our software, you can get completely free cusomter support 24/7.",
    icon: AnnotationIcon,
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