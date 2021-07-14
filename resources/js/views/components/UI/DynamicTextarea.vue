<template>
  <div class="textarea-box">
    <v-textarea auto-grow rows="1" color="white" />
    <div class="textarea-file">
      <img :src="svgAttach" alt="" />
      <span>Опубликовать</span>
    </div>
  </div>
</template>

<script>
import svgAttach from "../../../assets/images/form-post-attach.svg";

export default {
  name: "dynamic-textarea",
  data: () => ({
    svgAttach: svgAttach,
  }),
};
</script>

<style lang="scss">
.textarea-group {
  position: relative;
}

.textarea-box {
  position: relative;
}

.textarea-file {
  position: absolute;
  margin-top: -5px;
  width: 350px;
  background-color: white;
  img {
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
}

#input-12 {
  padding: 0;
  width: 350px;
  outline: none;
  resize: none;
  overflow: hidden;
  font-family: "Plumb";
}
</style>

