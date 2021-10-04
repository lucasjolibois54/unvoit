
<template>
  <Popover class="z-10 relative bg-darker-blue">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-transparent
          py-6
          lg:justify-start
          lg:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <div class="flex h-10">
              <h2
                class="text-4xl font-extrabold w-auto h-8 flex text-off-white"
              >
                <router-link to="/"> UNVOIT </router-link>
                <div class="mt-5">
                  <span
                    class="
                      absolute
                      inline-flex
                      rounded-full
                      h-3
                      w-3
                      bg-off-white
                    "
                  ></span>
                  <span
                    class="
                      animate-ping
                      absolute
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-gray-400
                      opacity-75
                    "
                  >
                  </span>
                </div>
              </h2>
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-lg
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              hover:bg-gray-100
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-regular-blue
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex space-x-10">
          <a
            href="#"
            class="text-base font-medium text-off-white hover:text-regular-blue"
          >
            Home
          </a>
          <a
            href="#FrontPageAbout"
            class="text-base font-medium text-off-white hover:text-regular-blue"
          >
            About
          </a>
          <a
            href="#FrontPagePlans"
            class="text-base font-medium text-off-white hover:text-regular-blue"
          >
            Plans
          </a>

          <a
            href="#FrontPageSupport"
            class="text-base font-medium text-off-white hover:text-regular-blue"
            to="/Support"
            >Support</a
          >
        </PopoverGroup>
        <div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
          <router-link
            class="
              whitespace-nowrap
              text-base
              font-medium
              text-regular-blue
              hover:border-blue-100
              hover:text-blue-100
              border-2 border-regular-blue
              px-4
              py-2
              rounded-full
            "
            to="/signin"
            >Sign in</router-link
          >
          <router-link
            class="
              ml-4
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border-2
              rounded-full
              shadow-sm
              text-base
              font-medium
              text-regular-green
              border-regular-green
              hover:text-green-100
              hover:border-green-100
              bg-transparent
              hover:bg-transparent
            "
            to="/signup"
            >Sign up</router-link
          >
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          lg:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <h2
                  class="
                    text-4xl
                    font-extrabold
                    h-8
                    w-auto
                    flex
                    text-darker-blue
                  "
                >
                  UNVOIT
                </h2>
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-lg
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2 focus:ring-inset focus:ring-darker-blue
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-regular-blue"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8"></div>
            <div>
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-lg
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-regular-blue
                  hover:bg-darker-blue
                "
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ " " }}
                <a href="#" class="text-regular-blue hover:text-darker-blue">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "About us",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Plans",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Support",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "helpcenter",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
    };
  },
};
</script>












<!--

<template>

  <Popover class="z-10 relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-gray-100
          py-6
          md:justify-start
          md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <div class="flex h-10">
              <h2 class="text-4xl font-extrabold w-auto h-8 flex">
                UNVOIT
                <div class="mt-5">
                  <span
                    class="absolute inline-flex rounded-full h-3 w-3 bg-black"
                  ></span>
                  <span
                    class="
                      animate-ping
                      absolute
                      inline-flex
                      h-3
                      w-3
                      rounded-full
                      bg-gray-400
                      opacity-75
                    "
                  >
                  </span>
                </div>
              </h2>
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              hover:bg-gray-100
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-indigo-500
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span>Solutions</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="
                  absolute
                  z-10
                  -ml-4
                  mt-3
                  transform
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                  lg:ml-0
                  lg:left-1/2
                  lg:-translate-x-1/2
                "
              >
                <div
                  class="
                    rounded-lg
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    overflow-hidden
                  "
                >
                  <div
                    class="
                      relative
                      grid
                      gap-6
                      bg-white
                      px-5
                      py-6
                      sm:gap-8
                      sm:p-8
                    "
                  >
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="
                        -m-3
                        p-3
                        flex
                        items-start
                        rounded-lg
                        hover:bg-gray-50
                      "
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    class="
                      px-5
                      py-5
                      bg-gray-50
                      space-y-6
                      sm:flex
                      sm:space-y-0 sm:space-x-10
                      sm:px-8
                    "
                  >
                    <div
                      v-for="item in callsToAction"
                      :key="item.name"
                      class="flow-root"
                    >
                      <a
                        :href="item.href"
                        class="
                          -m-3
                          p-3
                          flex
                          items-center
                          rounded-md
                          text-base
                          font-medium
                          text-gray-900
                          hover:bg-gray-100
                        "
                      >
                        <component
                          :is="item.icon"
                          class="flex-shrink-0 h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a
            href="#"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Pricing
          </a>

          <router-link
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            to="/Support"
            >Support</router-link
          >

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[
                open ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span>More</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="
                  absolute
                  z-10
                  left-1/2
                  transform
                  -translate-x-1/2
                  mt-3
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                "
              >
                <div
                  class="
                    rounded-lg
                    shadow-lg
                    ring-1 ring-black ring-opacity-5
                    overflow-hidden
                  "
                >
                  <div
                    class="
                      relative
                      grid
                      gap-6
                      bg-white
                      px-5
                      py-6
                      sm:gap-8
                      sm:p-8
                    "
                  >
                    <a
                      v-for="item in resources"
                      :key="item.name"
                      :href="item.href"
                      class="
                        -m-3
                        p-3
                        flex
                        items-start
                        rounded-lg
                        hover:bg-gray-50
                      "
                    >
                      <component
                        :is="item.icon"
                        class="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-600">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3
                        class="
                          text-sm
                          tracking-wide
                          font-medium
                          text-gray-500
                          uppercase
                        "
                      >
                        Recent Posts
                      </h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li
                          v-for="post in recentPosts"
                          :key="post.id"
                          class="text-base truncate"
                        >
                          <a
                            :href="post.href"
                            class="
                              font-medium
                              text-gray-900
                              hover:text-gray-700
                            "
                          >
                            {{ post.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a
                        href="#"
                        class="
                          font-medium
                          text-indigo-600
                          hover:text-indigo-500
                        "
                      >
                        View all posts <span aria-hidden="true">&rarr;</span></a
                      >
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            class="
              whitespace-nowrap
              text-base
              font-medium
              text-gray-500
              hover:text-gray-900
            "
            to="/signin"
            >Sign in</router-link
          >
          <router-link
            class="
              ml-8
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-sm
              text-base
              font-medium
              text-white
              bg-indigo-600
              hover:bg-indigo-700
            "
            to="/signup"
            >Sign up</router-link
          >
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500
                    hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2 focus:ring-inset focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>

              <a
                href="#"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              <a
                v-for="item in resources"
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {{ item.name }}
              </a>
            </div>
            <div>
              <a
                href="#"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                "
              >
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ " " }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>

 
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "helpcenter",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      callsToAction,
      resources,
      recentPosts,
    };
  },
};
</script>



-->