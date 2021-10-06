<template>
  <section
    v-for="(item, index) in currentInvoice.invoiceItemList"
    :key="index"
    class="bg-light-grey"
  >
    <div class="w-full lg:w-4/6 px-4 mx-auto">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          border-0
        "
      >
        <div class="flex flex-wrap w-full mt-8">
          <div class="w-3/12">
            <div class="relative w-full mb-3">
              <label
                class="
                      block
                      uppercase
                      text-black
                      text-xs
                      font-bold
                      mb-12
                    "
                htmlfor="grid-password"
              >
                Item
              </label>
              <p class="text-black">
                {{ item.ItemName }}
              </p>
            </div>
          </div>
          <div class="w-3/12">
            <div class="relative w-full mb-3">
              <label
                class="
                      block
                      uppercase
                      text-black
                      text-xs
                      font-bold
                      mb-12
                    "
                htmlfor="grid-password"
              >
                Cost
              </label>
              <p class="text-black">
                {{ item.price }}
              </p>
            </div>
          </div>
          <div class="w-3/12">
            <div class="relative w-full mb-3">
              <label
                class="
                      block
                      uppercase
                      text-black 
                      text-xs
                      font-bold
                      mb-12
                    "
                htmlfor="grid-password"
              >
                QTY
              </label>
              <p class="text-black">{{ item.qty }}</p>
            </div>
          </div>
          <div class="w-3/12">
            <div class="relative w-full mb-3">
              <label
                class="
                      block
                      uppercase
                      text-black 
                      text-xs
                      font-bold
                      mb-12
                    "
                htmlfor="grid-password"
              >
                Total
              </label>
              <p class="text-black">{{ item.total }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
  components: {},
};
</script>

<style scoped></style>
