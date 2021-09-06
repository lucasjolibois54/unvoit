TrashIconTrashIcon<template>
  <TransitionRoot
    @click="checkClick"
    ref="invoiceWrap"
    as="template"
    :show="open"
  >
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div class="sticky inline-block">
            <div class="py-24 justify-center mx-auto text-center w-full">
              <div class="">
                <form @submit.prevent="submitForm">
                  <div class="shadow overflow-hidden sm:rounded-t-md">
                    <h2
                      class="px-5 py-2 text-2xl font-medium text-left text-gray-700 bg-gray-100"
                    >
                      Bill From
                    </h2>
                    <div class="bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="billerAddress"
                            class="block text-sm font-medium text-gray-700"
                            >Street address</label
                          >
                          <input
                            v-model="billerAddress"
                            required
                            type="text"
                            name="billerAddress"
                            id="billerAddress"
                            autocomplete="street-address"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="billerCountry"
                            class="block text-sm font-medium text-gray-700"
                            >Country / Region</label
                          >
                          <select
                            v-model="billerCountry"
                            required
                            id="billerCountry"
                            name="billerCountry"
                            autocomplete="country"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="billerCity"
                            class="block text-sm font-medium text-gray-700"
                            >City</label
                          >
                          <input
                            v-model="billerCity"
                            required
                            type="text"
                            name="billerCity"
                            id="billerCity"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="billerState"
                            class="block text-sm font-medium text-gray-700"
                            >State / Province</label
                          >
                          <input
                            v-model="billerState"
                            required
                            type="text"
                            name="billerState"
                            id="billerState"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="billerPostalCode"
                            class="block text-sm font-medium text-gray-700"
                            >ZIP / Postal</label
                          >
                          <input
                            v-model="billerPostalCode"
                            required
                            type="text"
                            name="billerPostalCode"
                            id="billerPostalCode"
                            autocomplete="postal-code"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Bill to -->

                  <div class="shadow overflow-hidden">
                    <h2
                      class="px-5 py-2 text-2xl font-medium text-left text-gray-700 bg-gray-100"
                    >
                      Bill To
                    </h2>
                    <div class="bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="clientName"
                            class="block text-sm font-medium text-gray-700"
                            >Client's Full Name</label
                          >
                          <input
                            v-model="clientName"
                            required
                            type="text"
                            name="clientName"
                            id="clientName"
                            autocomplete="given-name"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="clientEmail"
                            class="block text-sm font-medium text-gray-700"
                            >Email Address</label
                          >
                          <input
                            v-model="clientEmail"
                            required
                            type="text"
                            name="clientEmail"
                            id="clientEmail"
                            autocomplete="email"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="clientCountry"
                            class="block text-sm font-medium text-gray-700"
                            >Country / Region</label
                          >
                          <select
                            v-model="clientCountry"
                            required
                            id="clientCountry"
                            name="clientCountry"
                            autocomplete="country"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="clientAddress"
                            class="block text-sm font-medium text-gray-700"
                            >Street address</label
                          >
                          <input
                            v-model="clientAddress"
                            required
                            type="text"
                            name="clientAddress"
                            id="clientAddress"
                            autocomplete="street-address"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="clientCity"
                            class="block text-sm font-medium text-gray-700"
                            >City</label
                          >
                          <input
                            v-model="clientCity"
                            required
                            type="text"
                            name="clientCity"
                            id="clientCity"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="clientState"
                            class="block text-sm font-medium text-gray-700"
                            >State / Province</label
                          >
                          <input
                            v-model="clientState"
                            required
                            type="text"
                            name="clientState"
                            id="clientState"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            for="clientPostalCode"
                            class="block text-sm font-medium text-gray-700"
                            >ZIP / Postal</label
                          >
                          <input
                            v-model="clientPostalCode"
                            required
                            type="text"
                            name="clientPostalCode"
                            id="clientPostalCode"
                            autocomplete="postal-code"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="hidden sm:block bg-white" aria-hidden="true">
                    <div class="">
                      <div class="border border-gray-200 w-24 mx-auto" />
                    </div>
                  </div>

                  <div class="shadow overflow-hidden sm:rounded-b-md">
                    <div class="bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="invoiceDate"
                            class="block text-sm font-medium text-gray-700"
                            >Invoice Date</label
                          >
                          <input
                            v-model="invoiceDate"
                            disabled
                            type="text"
                            name="invoiceDate"
                            id="invoiceDate"
                            autocomplete="invoice-date"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="paymentDueDate"
                            class="block text-sm font-medium text-gray-700"
                            >Payment Due</label
                          >
                          <input
                            v-model="paymentDueDate"
                            disabled
                            type="text"
                            name="paymentDueDate"
                            id="paymentDueDate"
                            autocomplete="payment-due"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="paymentTerms"
                            class="block text-sm font-medium text-gray-700"
                            >Payment Terms</label
                          >
                          <select
                            v-model="paymentTerms"
                            required
                            id="paymentTerms"
                            name="paymentTerms"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="30">Net 30 Days</option>
                            <option value="60">Net 60 days</option>
                          </select>
                        </div>

                        <div class="col-span-6">
                          <label
                            for="productDescription"
                            class="block text-sm font-medium text-gray-700"
                            >Product Description</label
                          >
                          <input
                            v-model="productDescription"
                            required
                            type="text"
                            name="productDescription"
                            id="productDescription"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-5"
                          />
                        </div>

                        <!-- Add item to invoice -->

                        <div class="col-span-6 justify-center">
                          <div class="flex flex-col ">
                            <div class="my-2 overflow-x-auto mx-auto">
                              <div
                                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
                              >
                                <div
                                  class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                                >
                                  <div
                                    class="px-4 py-3 bg-gray-50 text-left sm:px-6"
                                  >
                                    <button
                                      @click="addItem"
                                      type="submit"
                                      class="inline-flex justify-center py-2 px-4 border border-transparent transition duration-300 ease-in-out shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                      Add Item
                                    </button>
                                  </div>
                                  <table
                                    class="min-w-full divide-y divide-gray-200"
                                  >
                                    <thead class="bg-gray-50">
                                      <tr>
                                        <th
                                          scope="col"
                                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                          Item Name
                                        </th>
                                        <th
                                          scope="col"
                                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                          Qty
                                        </th>
                                        <th
                                          scope="col"
                                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                          Price
                                        </th>
                                        <th
                                          scope="col"
                                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                          Total
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody
                                      class="bg-white divide-y divide-gray-200"
                                    >
                                      <tr
                                        v-for="(item, index) in invoiceItemList"
                                        :key="index"
                                      >
                                        <td class=" py-4 whitespace-nowrap">
                                          <div class="flex items-center">
                                            <div class="ml-4">
                                              <div
                                                class="text-sm font-medium text-gray-900"
                                              >
                                                <input
                                                  type="text"
                                                  v-model="item.ItemName"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td class="py-4 whitespace-nowrap">
                                          <div class="text-sm text-gray-900">
                                            <input
                                              class="w-20"
                                              type="text"
                                              v-model="item.qty"
                                            />
                                          </div>
                                        </td>
                                        <td
                                          class="whitespace-nowrap text-sm text-gray-500"
                                        >
                                          <input
                                            class="md:w-full w-20"
                                            type="text"
                                            v-model="item.price"
                                          />
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                          <span
                                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                          >
                                            ${{
                                              (item.total =
                                                item.qty * item.price)
                                            }}
                                          </span>
                                        </td>
                                        <td
                                          class="-px-6 py-4 whitespace-nowrap"
                                        >
                                          <TrashIcon
                                            :class="[
                                              'transition duration-300 ease-in-out',
                                              'text-red-600',
                                              'cursor-pointer',
                                              'ml-2 h-auto w-6 hover:text-black',
                                            ]"
                                            @click="deleteInvoiceItem(item.id)"
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="px-4 py-3 bg-gray-50 sm:px-6 space-x-3 text-right"
                    >
                      <button
                        @click="saveDraft"
                        type="submit"
                        class=" inline-flex justify-center py-2 px-4 border border-transparent transition duration-300 ease-in-out shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save Draft
                      </button>
                      <button
                        @click="publishInvoice"
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent transition duration-300 ease-in-out shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send Invoice
                      </button>
                      <div>
                        <button
                          @click="closeInvoice"
                          type="submit"
                          class="text-base inline-flex underline mt-3 py-2 px-4 border border-transparent transition duration-300 ease-in-out font-medium text-red-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { uid } from "uid";
import { mapMutations } from "vuex";
import { ref } from "vue";

//firebase
import db from "../main";

//Icons
import { TrashIcon } from "@heroicons/vue/outline";

import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    TrashIcon,
  },
  setup() {
    const open = ref(true);

    return {
      open,
    };
  },
  name: "invoiceModal",
  data() {
    return {
      dateOptions: { year: "numeric", month: "short", day: "numeric" },
      //biller
      billerAddress: null,
      billerCountry: null,
      billerCity: null,
      billerState: null,
      billerPostalCode: null,
      //client
      clientName: null,
      clientEmail: null,
      clientCountry: null,
      clientAddress: null,
      clientCity: null,
      clientState: null,
      clientPostalCode: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      paymentTerms: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
  created() {
    //get current date for invoice date field
    this.invoiceDateUnix = Date.now();
    this.invoiceDate = new Date(this.invoiceDateUnix).toLocaleDateString(
      "en-us",
      this.dateOptions
    );
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE"]),

    closeInvoice() {
      this.TOGGLE_INVOICE();
    },

    addItem() {
      this.invoiceItemList.push({
        id: uid(),
        itemName: "",
        qty: "",
        price: "",
        total: "",
      });
    },

    deleteInvoiceItem(id) {
      this.invoiceItemList = this.invoiceItemList.filter(
        (item) => item.id !== id
      );
    },

    calInvoiceTotal() {
      this.invoiceTotal = 0;
      this.invoiceItemList.forEach((item) => {
        this.invoiceTotal += item.total;
      });
    },

    publishInvoice() {
      this.invoicePending = true;
    },

    saveDraft() {
      this.invoiceDraft = true;
    },

    async uploadInvoice() {
      if (this.invoiceItemList.length <= 0) {
        alert("Please ensure you filled out work items!");
        return;
      }

      this.calInvoiceTotal();

      const dataBase = db.collection("invoices").doc();

      await dataBase.set({
        invoiceId: uid(6),
        //biller
        billerAddress: this.billerAddress,
        billerCountry: this.billerCountry,
        billerCity: this.billerCity,
        billerState: this.billerState,
        billerPostalCode: this.billerPostalCode,
        //client
        clientName: this.clientName,
        clientEmail: this.clientEmail,
        clientCountry: this.clientCountry,
        clientAddress: this.clientAddress,
        clientCity: this.clientCity,
        clientState: this.clientState,
        clientPostalCode: this.clientPostalCode,
        invoiceDateUnix: this.invoiceDateUnix,
        invoiceDate: this.invoiceDate,
        paymentDueDateUnix: this.paymentDueDateUnix,
        paymentDueDate: this.paymentDueDate,
        paymentTerms: this.paymentTerms,
        productDescription: this.productDescription,
        invoicePending: this.invoicePending,
        invoiceDraft: this.invoiceDraft,
        invoiceItemList: this.invoiceItemList,
        invoiceTotal: this.invoiceTotal,
      });

      this.TOGGLE_INVOICE();
    },

    submitForm() {
      this.uploadInvoice();
    },
  },
  watch: {
    paymentTerms() {
      const futureDate = new Date();
      this.paymentDueDateUnix = futureDate.setDate(
        futureDate.getDate() + parseInt(this.paymentTerms)
      );
      this.paymentDueDate = new Date(
        this.paymentDueDateUnix
      ).toLocaleDateString("en-us", this.dateOptions);
    },
  },
};
</script>
