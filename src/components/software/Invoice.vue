<template>
  <router-link
    :to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }"
  >
    <div class="flex flex-col px-6 py-2">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class=" align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="hover:bg-indigo-200 transition duration-300 ease-in-out"
                >
                  <td class="px-6 py-4 text-left whitespace-nowrap">
                    #{{ invoice.invoiceId }}
                    {{ invoice.clientName }}
                  </td>
                  <td class="px-6 py-4 text-left whitespace-nowrap">
                    {{ invoice.paymentTerms }} Days (
                    {{ invoice.paymentDueDate }} )
                  </td>
                  <td class="px-6 py-4 text-left whitespace-nowrap">
                    {{ invoice.clientCountry }}
                  </td>
                  <td class="px-6 py-4 text-left whitespace-nowrap">
                    ${{ invoice.invoiceTotal }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
  components: {},
};
</script>

<style scoped></style>
