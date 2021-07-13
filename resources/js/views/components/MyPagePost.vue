<template>
  <div class="post-group">
    <form action="" class="post-form">
      <dynamic-textarea />
    </form>
  </div>
</template>

<script>
import postImage from "../../assets/images/orig-16151963622a8b73d4077d7ea242993e1665322891.jpeg";
import DynamicTextarea from "./UI/DynamicTextarea.vue";

export default {
  components: { DynamicTextarea },
  name: "myPagePost",
  data: () => ({
    postImage: postImage,
    textarea: "",
    rows: 1,
    cols: 47,
  }),
  methods: {
    input() {
      console.log(this.cols);
      this.rows = 1 + Math.floor(this.textarea.length / 36);
    },
  },
};
</script>