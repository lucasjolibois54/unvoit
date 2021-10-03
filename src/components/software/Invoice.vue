<template>
  <tbody class="text-gray-600 dark:text-gray-100">
    <!-- Table body content -->
    <tr>
      <td
        class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800"
      >
        <div class="flex items-center">
          <svg
            viewBox="0 0 24 24"
            class="w-4 mr-5 text-yellow-500"
            stroke="currentColor"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          #{{ invoice.invoiceId }}
        </div>
      </td>
      <td
        class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800"
      >
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.001 512.001"
            class="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <path
              fill="#03a9f4"
              d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z"
            />
            <path
              fill="#283593"
              d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z"
            />
          </svg>
          {{ invoice.clientName }}
        </div>
      </td>
      <td
        class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden"
      >
        {{ invoice.productDescription }}
      </td>
      <td
        class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-red-500"
      >
        ${{ invoice.invoiceTotal }}
      </td>
      <td
        class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800"
      >
        <div class="flex items-center">
          <div class="sm:flex hidden flex-col">
            {{ invoice.invoiceDate }}
            <div class="text-gray-400 text-xs">
              {{ invoice.paymentDueDate }}
            </div>
          </div>
          <button
            class="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto"
          >
            <router-link
              :to="{
                name: 'Invoice',
                params: { invoiceId: invoice.invoiceId },
              }"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-5"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </router-link>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
  components: {},
};
</script>

<style scoped></style>
