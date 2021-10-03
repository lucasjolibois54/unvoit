<template>
  <button @mousedown="downloadFile">Download File</button>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  props: ["dom", "name"],
  methods: {
    downloadFile() {
      const me = this;

      const invoice = document.querySelector(me.dom);
      var opt = {
        margin: 1,
        filename: me.name,
      };
      html2pdf()
        .from(invoice)
        .set(opt)
        .save();
    },
  },
};
</script>
