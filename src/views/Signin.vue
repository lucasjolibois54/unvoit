<template>
  <HeaderFrontpage />
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-darker-blue
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
    
  >
  <div class="rounded-lg bg-white sm:w-2/6">
    <div class="p-20 w-24 md:w-auto ...">
      <div>
        <h2 class="mt-6 text-center text-3xl text-gray-900">
          <span class="flex h-12 justify-center font-medium"
            >Sign in to<br> begin invoicing.</span
          >
          <br>
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-regular-blue hover:text-light-regular-blue">
            start your 14-day free trial
          </a>
        </p>
      </div>
      <form
        id="signin-form"
        @submit.prevent="loginUser"
        class="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-black
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-light-regular-blue
                focus:border-regular-blue
                focus:z-10
                sm:text-sm
              "
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-black
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-light-regular-blue
                focus:border-regular-blue
                focus:z-10
                sm:text-sms
              "
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="
                h-4
                w-4
                focus:ring-regular-blue
                focus:border-light-regular-blue
                border-gray-300
                rounded
              "
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-regular-blue hover:text-light-regular-blue"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            v-if="!xhrRequest"
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-regular-blue
              hover:bg-light-regular-blue
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:regular-blue
            "
           >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
                class="h-5 w-5 text-white group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
          <button
            v-if="xhrRequest"
            class="
              w-full
              justify-center
              border border-transparent
              rounded-md
              text-white
              bg-gray-600
            "
          >
            <span>
              <svg
                class="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                style="margin:auto;background:0 0"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                display="block"
              >
                <circle cx="84" cy="50" r="10" fill="#4f46e5">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="0.3623188405797101s"
                    calcMode="spline"
                    keyTimes="0;1"
                    values="14;0"
                    keySplines="0 0.5 0.5 1"
                    begin="0s"
                  />
                  <animate
                    attributeName="fill"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="discrete"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="#4f46e5;#4f46e5;#bab8e3;#8680ea;#4f46e5"
                    begin="0s"
                  />
                </circle>
                <circle cx="16" cy="50" r="10" fill="#4f46e5">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                  />
                </circle>
                <circle cx="50" cy="50" r="10" fill="#8680ea">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.3623188405797101s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.3623188405797101s"
                  />
                </circle>
                <circle cx="84" cy="50" r="10" fill="#bab8e3">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.7246376811594202s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.7246376811594202s"
                  />
                </circle>
                <circle cx="16" cy="50" r="10" fill="#4f46e5">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-1.0869565217391304s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-1.0869565217391304s"
                  />
                </circle>
              </svg>
            </span>
          </button>
        </div>
      </form>
      <br>
      <img
        class="mx-auto h-50 w-auto"
        src="../assets/images/Illustration_Workspace.svg"
        alt="Workflow"
      />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import HeaderFrontpage from "@/components/frontpage/HeaderFrontpage.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      xhrRequest: false,
    };
  },

  methods: {
    loginUser() {
      let v = this;

      v.xhrRequest = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            v.xhrRequest = false;
            this.$router.replace("member-area");
          },
          (err) => {
            v.xhrRequest = false;
            console.log(`Error - ${err.message}`);
          }
        );
    },
  },

  name: "Signin",
  components: {
    HeaderFrontpage,
  },
};
</script>

<style>
.rounded-lg {
  border-radius: 25px;
}
</style>

<!--
<template>
  <HeaderFrontpage />
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
    
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl text-gray-900">
          <span class="md:underline flex h-12 justify-center font-extrabold"
            >Sign in</span
          >to begin invoicing.
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
          </a>
        </p>
      </div>
      <form
        id="signin-form"
        @submit.prevent="loginUser"
        class="mt-8 space-y-6"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="
                h-4
                w-4
                text-indigo-600
                focus:ring-indigo-500
                border-gray-300
                rounded
              "
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            v-if="!xhrRequest"
            type="submit"
            class="
              group
              relative
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
           >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
          <button
            v-if="xhrRequest"
            class="
              w-full
              justify-center
              border border-transparent
              rounded-md
              text-white
              bg-gray-600
            "
          >
            <span>
              <svg
                class="h-9 w-9"
                xmlns="http://www.w3.org/2000/svg"
                style="margin:auto;background:0 0"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                display="block"
              >
                <circle cx="84" cy="50" r="10" fill="#4f46e5">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="0.3623188405797101s"
                    calcMode="spline"
                    keyTimes="0;1"
                    values="14;0"
                    keySplines="0 0.5 0.5 1"
                    begin="0s"
                  />
                  <animate
                    attributeName="fill"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="discrete"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="#4f46e5;#4f46e5;#bab8e3;#8680ea;#4f46e5"
                    begin="0s"
                  />
                </circle>
                <circle cx="16" cy="50" r="10" fill="#4f46e5">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="0s"
                  />
                </circle>
                <circle cx="50" cy="50" r="10" fill="#8680ea">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.3623188405797101s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.3623188405797101s"
                  />
                </circle>
                <circle cx="84" cy="50" r="10" fill="#bab8e3">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.7246376811594202s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-0.7246376811594202s"
                  />
                </circle>
                <circle cx="16" cy="50" r="10" fill="#4f46e5">
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="0;0;14;14;14"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-1.0869565217391304s"
                  />
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.4492753623188404s"
                    calcMode="spline"
                    keyTimes="0;0.25;0.5;0.75;1"
                    values="16;16;16;50;84"
                    keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                    begin="-1.0869565217391304s"
                  />
                </circle>
              </svg>
            </span>
          </button>
        </div>
      </form>
      <img
        class="mx-auto h-50 w-auto"
        src="../assets/images/Illustration_Workspace.svg"
        alt="Workflow"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import HeaderFrontpage from "@/components/frontpage/HeaderFrontpage.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      xhrRequest: false,
    };
  },

  methods: {
    loginUser() {
      let v = this;

      v.xhrRequest = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            v.xhrRequest = false;
            this.$router.replace("member-area");
          },
          (err) => {
            v.xhrRequest = false;
            console.log(`Error - ${err.message}`);
          }
        );
    },
  },

  name: "Signin",
  components: {
    HeaderFrontpage,
  },
};
</script>

<style></style>
-->