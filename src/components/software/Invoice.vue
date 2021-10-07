<template>
  <tbody class="text-gray-600 dark:text-gray-100">
    <!-- Table body content -->
    <tr>
      <td class="sm:p-4">
        <div class=" items-center">
          <span class="flex text-sm text-gray-400">
            #{{ invoice.invoiceId }}
          </span>
          <span class="flex text-lg font-medium text-black">
            {{ invoice.clientName }}
          </span>
          <span class="flex text-sm text-black">
            {{ invoice.invoiceDate }}
          </span>
        </div>
      </td>

      <td class="">
        <div class="flex items-center">
          <div class="sm:flex hidden flex-col ml-48 font-medium text-lg">
            ${{ invoice.invoiceTotal }}
            <div class="text-gray-400 text-sm font-normal">
              {{ invoice.paymentDueDate }}
            </div>
          </div>
          <button
            class=" h-8 inline-flex transform rotate-90 text-gray-400 ml-16"
          >
            <router-link
              :to="{
                name: 'Invoice',
                params: { invoiceId: invoice.invoiceId },
              }"
            >
              <svg
                viewBox="0 0 24 24"
                class="w-10 bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-all"
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
