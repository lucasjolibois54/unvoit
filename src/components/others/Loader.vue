<template>
  <div
    class="animate-pulse flex space-x-2 p-5 rounded-full justify-center items-center"
  >
    <div
      class="blue-circle bg-green-600 p-2  w-4 h-4 rounded-full animate-bounce"
    ></div>
    <div
      class="green-circle  bg-gray-200 p-2 w-4 h-4 rounded-full animate-bounce"
    ></div>
    <div
      class="red-circle bg-indigo-700  p-2  w-4 h-4 rounded-full animate-bounce"
    ></div>
  </div>
</template>

<style>
.blue-circle {
  animation-delay: 0.1s;
}
.green-circle {
  animation-delay: 0.2s;
}
.red-circle {
  animation-delay: 0.3s;
}
</style>
