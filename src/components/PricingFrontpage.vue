<template>
  <div class="min-h-screen bg-gray-100 overflow-auto">
    <div class="container mx-auto max-w-4xl">
      <div class="mt-10 text-center">
        <h1 class="text-4xl font-bold text-gray-800">Pricing plans</h1>
        <p class="text-lg mt-3 font-semibold">
          Every plan includes 15 day free trial
        </p>
      </div>
      <hr class="mt-10" />
      <div class="md:flex md:space-x-10 px-6">
        <div class="py-12">
          <div
            class="
              bg-white
              pt-4
              rounded-xl
              space-y-6
              overflow-hidden
              transition-all
              duration-500
              transform
              hover:-translate-y-6
              hover:scale-105
              shadow-xl
              hover:shadow-2xl
              cursor-pointer
            "
          >
            <div class="px-8 flex justify-between items-center">
              <h4 class="text-xl font-bold text-gray-800">0$/ month</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 class="text-4xl text-center font-bold">Free</h1>
            <p class="px-4 text-center text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
            <ul class="text-center">
              <li>
                <a href="#" class="font-semibold">It is a long established</a>
              </li>
              <li>
                <a href="#" class="font-semibold">It is a long established</a>
              </li>
              <li>
                <a href="#" class="font-semibold">It is a long established</a>
              </li>
            </ul>
            <div class="text-center bg-gray-200">
              <button class="inline-block my-6 font-bold text-gray-800">
                Get started today
              </button>
            </div>
          </div>
        </div>
        <div class="py-12">
          <div
            class="
              bg-white
              pt-4
              rounded-xl
              space-y-6
              overflow-hidden
              transition-all
              duration-500
              transform
              hover:-translate-y-6
              -translate-y-2
              scale-105
              shadow-xl
              hover:shadow-2xl
              cursor-pointer
            "
          >
            <div class="px-8 flex justify-between items-center">
              <h4 class="text-xl font-bold text-gray-800">Blockchain</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </div>
            <h1 class="text-4xl text-center font-bold">35$/ month</h1>
            <p class="px-4 text-center text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
            <ul class="text-center">
              <li>
                <a href="#" class="font-semibold">It is a long established</a>
              </li>
              <li>
                <a href="#" class="font-semibold">It is a long established</a>
              </li>
              <li>
                <a href="#" class="font-semibold">It is a long established</a>
              </li>
            </ul>
            <div class="text-center bg-pink-600">
              <button class="inline-block my-6 font-bold text-white">
                Get started today
              </button>
            </div>
          </div>
        </div>
        <div class="py-12">
          <div
            class="
              bg-white
              pt-4
              rounded-xl
              space-y-6
              overflow-hidden
              transition-all
              duration-500
              transform
              hover:-translate-y-6
              hover:scale-105
              shadow-xl
              hover:shadow-2xl
              cursor-pointer
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>