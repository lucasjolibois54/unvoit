import { createStore } from 'vuex'

//firebase
import db from "../main";
export default createStore({
  state: {
    invoiceData: [],
    invoiceModal: null,
    modalActive: null,
    invoicesLoaded: null,
    currentInvoiceArray: null,
    editInvoice: null,
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive;
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload);
    },
    INVOICES_LOADED(state) {
      state.invoicesLoaded = true;
    },
    SET_CURRENT_INVOICE(state, payload) {
      state.currentInvoiceArray = state.invoiceData.filter(invoice => {
        return invoice.invoiceId === payload;
      })
    },
    TOGGLE_EDIT_INVOICE(state){
      state.editInvoice = !state.editInvoice;
    },
    DELETE_INVOICE(state, payload) {
      state.invoiceData = state.invoiceData.filter(invoice => invoice.docId !== payload)
    }
  },
  actions: {
    //check to make sure that the iteration of the doc running through doesnt already exist by using the "some"-method
    async GET_INVOICES({commit, state}) {
      const getData = db.collection('invoices');
      const results = await getData.get();
      results.forEach(doc => {
        if (!state.invoiceData.some(invoice => invoice.docId === doc.id)) {
          //Retrieving the doc data from the firebase "invoices"-collection.  
            const data = {
              docId: doc.id,
              invoiceId: doc.data().invoiceId,
              //biller
              billerAddress: doc.data().billerAddress,
              billerCountry: doc.data().billerCountry,
              billerCity: doc.data().billerCity,
              billerState: doc.data().billerState,
              billerPostalCode: doc.data().billerPostalCode,
              //client
              clientName: doc.data().clientName,
              clientEmail: doc.data().clientEmail,
              clientCountry: doc.data().clientCountry,
              clientAddress: doc.data().clientAddress,
              clientCity: doc.data().clientCity,
              clientState: doc.data().clientState,
              clientPostalCode: doc.data().clientPostalCode,
              invoiceDateUnix: doc.data().invoiceDateUnix,
              invoiceDate: doc.data().invoiceDate,
              paymentDueDateUnix: doc.data().paymentDueDateUnix,
              paymentDueDate: doc.data().paymentDueDate,
              paymentTerms: doc.data().paymentTerms,
              productDescription: doc.data().productDescription,
              invoicePending: doc.data().invoicePending,
              invoiceDraft: doc.data().invoiceDraft,
              invoiceItemList: doc.data().invoiceItemList,
              invoiceTotal: doc.data().invoiceTotal,
            };
            //We commit the mutation inside
            commit('SET_INVOICE_DATA', data);
          }
        });
      commit('INVOICES_LOADED')
    },
    async UPDATE_INVOICE({ commit, dispatch },  { docId, routeId }) {
      commit("DELETE_INVOICE", docId);
      await dispatch("GET_INVOICES");
      commit("TOGGLE_INVOICE");
      commit("TOGGLE_EDIT_INVOICE");
      commit("SET_CURRENT_INVOICE", routeId);
    },
    async DELETE_INVOICE({ commit }, docId){
      const getInvoice = db.collection('invoices').doc(docId);
      await getInvoice.delete();
      commit('DELETE_INVOICE', docId);
    },
  },
  modules: {
  },
});
