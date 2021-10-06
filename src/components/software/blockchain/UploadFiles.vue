<!--UploadFiles.vue-->
<template>
  <div class="sm:p-7 p-4">
    <table class="w-full text-center">
      <thead>
        <tr class="text-about-blue">
          <th class="p-20 rounded-md">
              <img
                        class="w-28 mx-auto"
                        :src="require('@/assets/upload.svg')"
                      />
            <h2 class="mx-auto font-bold mt-2">
              <h1>{{ title }}</h1>
              <div class="space-x-2 mx-auto mt-10">
                <button
                  class="rounded-md p-1 text-lg"
                  :type="my_thumbs !== null ? 'warning' : 'black'"
                  outlined
                  @click="onPickFile"
                >
                 Drag & drop your {{ my_thumbs !== null ? "New " : "" }}files here
                </button>
                <button
                  class="bg-red-100 rounded-md p-1"
                  type="danger"
                  outlined
                  @click="onUploadFile"
                  v-if="my_thumbs !== null"
                >
                  Upload Files
                </button>
              </div>
            </h2>
            <input
              type="file"
              style="display: none"
              ref="fileInput"
              accept="image/*"
              multiple
              @change="onFilePicked"
            />
            <it-divider v-if="cid !== null" />
            <it-badge value="Copy link" type="success" v-if="cid !== null">
              <it-button @click="onCopyLink(cidLink(cid))" ref="cid_link">
                {{ cidLink(cid) }}
              </it-button>
            </it-badge>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import * as web3storage from "@/utils/web3storage";
export default {
  name: "UploadFile",
  components: {},
  props: {
    title: String,
  },
  data() {
    return {
      filelist: null,
      my_thumbs: null,
      cid: null,
    };
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      this.filelist = files;
      let data = [];
      console.dir(files);
      for (let i = 0; i < files.length; i++) {
        console.log("File", files[i]);
        data.push(URL.createObjectURL(files[i]));
      }
      this.my_thumbs = data;
    },
    onUploadFile() {
      this.cid = web3storage.default.storeWithProgress(this.filelist);
      this.my_thumbs = null;
      this.filelist = null;
    },
    cidLink(cid) {
      return "https://" + cid + ".ipfs.dweb.link";
    },
    async onCopyLink(textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      console.log(textToCopy);
      alert("copied!");
    },
  },
};
</script>
