<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="z-0 relative bg-off-white overflow-hidden pb-10">
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
                text-darker-blue
                sm:text-4xl
                md:text-5xl
              "
            >
              <span class="block xl:inline"
                >Choose a plan that fits
                <span class="text-regular-blue">you</span>
              </span>
            </h1>

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
    <div id="app">
      <div class="m-12 tracking-wide leading-loose">
        <button
          class="
            bg-grey-lighter
            flex-1
            border-b-2
            md:flex-none
            border-grey
            ml-2
            hover:bg-grey-lightest
            text-grey-darkest
            font-bold
            py-4
            px-6
            rounded
          "
          @click="toggleModal"
        >
          Question
        </button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div
        v-if="modal"
        @click.self="toggleModal"
        class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex"
      >
        <div
          class="
            animated
            fadeInUp
            fixed
            shadow-inner
            max-w-md
            md:relative
            pin-b pin-x
            align-top
            m-auto
            justify-end
            md:justify-center
            p-8
            bg-white
            md:rounded
            w-full
            md:h-auto
            md:shadow
            flex flex-col
          "
        >
          <h2
            class="
              text-4xl text-center
              font-hairline
              md:leading-loose
              text-grey
              md:mt-8
              mb-4
            "
          >
            Question!
          </h2>
          <p class="text-xl leading-normal mb-8 text-center">
            Are you enjoying Tailwind CSS?
          </p>
          <div class="inline-flex justify-center">
            <button
              @click="toggleModal"
              class="
                bg-grey-lighter
                flex-1
                border-b-2
                md:flex-none
                border-green
                ml-2
                hover:bg-green-lightest
                text-grey-darkest
                font-bold
                py-4
                px-6
                rounded
              "
            >
              Absolutely
            </button>
            <button
              @click="toggleModal"
              class="
                bg-grey-lighter
                flex-1
                md:flex-none
                border-b-2 border-red
                ml-2
                hover:bg-red-lightest
                text-grey-darkest
                font-bold
                py-4
                px-6
                rounded
              "
            >
              Not so much
            </button>
          </div>
          <span @click="toggleModal" class="absolute pin-t pin-r pt-4 px-4">
            <svg
              class="h-12 w-12 text-grey hover:text-grey-darkest"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
        </div>
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
        <div class="mt-1">
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
            >1 year Pro version</a
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
              805$</a
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
