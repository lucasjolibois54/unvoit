<template>
<div id="__next">
    <div class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex">
        <div class="flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72">
            <a class="overflow-hidden w-10 md:w-auto" href="/">
            <span class="text-4xl font-bold">UNVOIT</span>
            </a>
        </div>
        <div class="flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8">
            <button type="button" class= "group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">
                <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span>
                    "Search"
                    <span class="hidden sm:inline"> for anything</span>
                </span>
                <span style="opacity: 1;" class="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
                    <span class="sr-only">Press </span>
                    <kbd class="font-sans">
                    <abbr title="Control" class="no-underline">Ctrl </abbr>
                    </kbd>
                    <span class="sr-only"> and </span>
                    <kbd class="font-sans">K</kbd>
                    <span class="sr-only"> to search</span>
                    </span>
            </button>
        </div>
    </div>
</div>
</template>

<script></script>

<style scoped></style>
