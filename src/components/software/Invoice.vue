<template>
  <router-link
    :to="{ name: 'Invoice', params: { invoiceId: invoice.invoiceId } }"
  >
    <div class="left flex">
      <span class="tracking-number">#{{ invoice.invoiceId }}</span>
      <span class="due-date">{{ invoice.paymentDueDate }}</span>
      <span class="person">{{ invoice.clientName }}</span>
    </div>
    <div class="right flex">
      <span class="price">${{ invoice.invoiceTotal }}</span>
      <div
        class="status-btn flex"
        :class="{
          paid: invoice.invoicePaid,
          draft: invoice.invoiceDraft,
          pending: invoice.invoicePending,
        }"
      >
        <span v-if="invoice.invoicePaid">Paid</span>
        <span v-if="invoice.invoiceDraft">Draft</span>
        <span v-if="invoice.invoicePending">Pending</span>
      </div>
      <div class="icon">
        <img class="w-4 h-auto" src="@/assets/firebase-logo.svg" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
};
</script>

<style scoped></style>
