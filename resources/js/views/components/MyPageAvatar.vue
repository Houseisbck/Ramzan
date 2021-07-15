<template>
  <div class="header__center">
    <form class="header__center-image" action="POST">
      <img
        @mouseenter="hoverClass = 'show-upload'"
        @mouseleave="hoverClass = 'hide-upload'"
        class="image-block"
        :src="userAvatar[userAvatar.length - 1].path"
        alt=""
      />
      <div
        @mouseenter="hoverClass = 'show-upload'"
        @mouseleave="hoverClass = 'hide-upload'"
        :class="hoverClass"
        class="header__center-group__input"
      >
        <input @change="handleOnChange" id="headerSearchImage" type="file" />
        <label v-if="sessionId == user.id" for="headerSearchImage"></label>
      </div>
      <div class="canvas-group" v-show="canvasShow">
        <canvas ref="canvas" :class="canvas" class="canvas"></canvas>
        <button class="canvas-btn">сохранить миниатюру</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "myPageAvatar",
  props: {
    user: {},
    sessionId: {},
    userAvatar: [],
  },

  data: () => ({
    hoverClass: {},
    canvas: {},
    avatar: "",
    createAvatar: {},
    canvasShow: false,
  }),
  methods: {
    async handleOnChange(e) {
      this.avatar = await e.target.files[0];

      let urlImage = URL.createObjectURL(this.avatar);

      let ctx = this.$refs.canvas.getContext("2d");

      let canvas = this.$refs.canvas;

      let pic = new Image();

      pic.src = urlImage;

      pic.onload = async function () {
        canvas.height = pic.height;

        canvas.width = pic.width;

        ctx.drawImage(pic, 0, 0, pic.width, pic.height);

        return;
      };

      this.canvasShow = true;

      const formData = new FormData();

      formData.set("avatar", this.avatar);

      await axios
        .post("/upload", formData)
        .then((response) => (this.createAvatar = response.data));
      this.$emit("avatar", this.createAvatar);
    },
  },
};
</script>
  
<style lang="scss" scoped>
@import "../../js/assets/scss/__my-page-avatar";
</style>