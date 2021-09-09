<template>
  <div class="z-0 relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="sm:text-center lg:text-center mt-20">
        <h1
          class="
            text-4xl
            tracking-tight
            font-extrabold
            sm:text-5xl
            md:text-6xl
            block
            text-indigo-600
            xl:inline
          "
        >
          Support
        </h1>
      </div>
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
            xl:mt-20
          "
        >
          <div class="sm:text-center lg:text-left">
            <p
              class="
                mb-10
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
              Got any question? Make sure to check out our FAQ to see if your
              question has already been answered, or send us a message in our
              livechat!
            </p>
          </div>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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
                  rounded-3xl
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  md:text-lg
                  md:px-10
                  md:py-2
                "
              >
                Chat live
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
                  rounded-3xl
                  text-white
                  bg-indigo-400
                  hover:bg-indigo-600
                  md:text-lg
                  md:px-10
                  md:py-2
                "
              >
                FAQ
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-20 lg:-right-20 lg:w-1/2 mt-20">
      <img
        class="object-cover sm:h-72 md:h-96 mt-10"
        src="@/assets/svg/support.svg"
        alt=""
      />
    </div>
  </div>
</template>