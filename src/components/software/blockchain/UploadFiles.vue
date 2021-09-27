<!--UploadFiles.vue-->
<template>
  <div class="hero">
    <h1>{{ title }}</h1>
    <it-divider />
    <it-alert
      v-if="my_thumbs !== null"
      iconbox
      type="primary"
      title="Chosen Files"
    >
      <it-avatar-group square>
        <it-badge
          position="top-left"
          type="primary"
          v-for="(thumb, i) in my_thumbs"
          :key="i"
          :value="i + 1"
        >
          <it-avatar square class="upload_preview" :src="thumb" />
        </it-badge>
      </it-avatar-group>
    </it-alert>
    <it-divider v-if="my_thumbs !== null" />
    <it-button-group>
      <it-button
        :type="my_thumbs !== null ? 'warning' : 'black'"
        icon="note_add"
        outlined
        @click="onPickFile"
      >
        Select {{ my_thumbs !== null ? "New " : "" }}Files
      </it-button>
      <it-button
        type="danger"
        icon="upload"
        outlined
        @click="onUploadFile"
        v-if="my_thumbs !== null"
      >
        Upload Files
      </it-button>
    </it-button-group>
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
      console.log("copied!");
    },
  },
};
</script>
