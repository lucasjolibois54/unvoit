<template>
  <div class="m-auto max-w-6xl p-12">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
        <div class="md:text-5xl text-2xl uppercase font-black">
          Help <span class="text-indigo-700">center </span>
        </div>
        <div class="text-xl mt-4">
          Got any questions? Make sure to check out our FAQ to see if your
          question has already been asnwered, or send us a message in our
          livechat!
        </div>
        <div class="my-5 h-16">
          <div
            class="
              shadow-md
              font-medium
              py-2
              px-4
              text-white
              cursor-pointer
              bg-indigo-700
              hover:bg-indigo-800
              rounded
              text-lg text-center
              w-48
            "
          >
            See FAQ
          </div>
        </div>
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
        <div class="bg-dots">
          <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
            <img
              alt="card img"
              class="rounded-t"
              src="/assets/images/helpcenter.svg"
            />
            <div class="text-2xl p-10 bg-white">
              <img
                alt="quote"
                class="float-left mr-1"
                src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.bg-dots {
  background-image: url(https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5dea7a12bb83ab1f13040de5_cx-dots.svg);
  background-repeat: no-repeat;
}
</style>