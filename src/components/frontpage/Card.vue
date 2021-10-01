<template>
  <div
    class="
      mt-4
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
    <div>
      <a class="pl-14 text-lg text-gray-700 font-weight:400" href="#">{{
        name
      }}</a>
    </div>
    <div class="flex items-center">
      <img
        src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        class="w-8 h-8 object-cover rounded-full"
        alt="avatar"
      />
      <div class="mt-1">
        <a class="pl-6 text-2xl text-gray-700 font-medium" href="#">{{
          price
        }}</a>
      </div>
      <div>
        <button
          class="
            bg-regular-blue
            hover:bg-light-regular-blue
            text-white
            active:bg-pink-600
            font-bold
            uppercase
            text-xs
            px-6
            py-3
            rounded
            shadow
            hover:shadow-lg
            outline-none
            focus:outline-none
            mr-1
            mt-1
            mb-6
            ml-14
            ease-linear
            transition-all
            duration-150
          "
          type="button"
          v-on:click="toggleModal()"
        >
          Learn More
        </button>
        <div
          v-if="showModal"
          class="
            overflow-x-hidden overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            justify-center
            items-center
            flex
          "
        >
          <div class="relative w-auto my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
              class="
                border-0
                rounded-lg
                shadow-lg
                relative
                flex flex-col
                w-80
                h-auto
                bg-white
                outline-none
                focus:outline-none
              "
            >
              <!--header-->
              <div
                class="
                  flex
                  items-start
                  justify-between
                  p-5
                  border-b border-solid border-blueGray-200
                  rounded-t
                "
              >
                <h3 class="text-3xl font-semibold">{{ title }}</h3>
                <button
                  class="
                    p-1
                    ml-auto
                    bg-transparent
                    border-0
                    text-black
                    opacity-5
                    float-right
                    text-3xl
                    leading-none
                    font-semibold
                    outline-none
                    focus:outline-none
                  "
                  v-on:click="toggleModal()"
                >
                  <span
                    class="
                      bg-transparent
                      text-black
                      opacity-5
                      h-6
                      w-6
                      text-2xl
                      block
                      outline-none
                      focus:outline-none
                    "
                  >
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <div class="relative p-6 flex-auto">
                <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
                  {{ description }}
                </p>
              </div>
              <!--footer-->
              <div
                class="
                  flex
                  items-center
                  justify-end
                  p-6
                  border-t border-solid border-blueGray-200
                  rounded-b
                "
              >
                <button
                  class="
                    text-red-500
                    bg-transparent
                    border border-solid border-red-500
                    hover:bg-red-500
                    hover:text-white
                    active:bg-red-600
                    font-bold
                    uppercase
                    text-sm
                    px-6
                    py-3
                    rounded
                    outline-none
                    focus:outline-none
                    mr-1
                    mb-1
                    ease-linear
                    transition-all
                    duration-150
                  "
                  type="button"
                  v-on:click="toggleModal()"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="showModal"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
  props: ["title", "name", "description", "price"],
};
</script>