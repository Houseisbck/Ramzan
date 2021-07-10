<template>
  <div class="header__center col-5">
    <form class="header__center-image d-flex align-items-center" action="">
      <img
        @mouseenter="hoverClass = 'show-upload'"
        @mouseleave="hoverClass = 'hide-upload'"
        class="image-block col-9"
        :src="user.avatar"
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
    </form>
  </div>
</template>

<script>
export default {
  name: "myPageAvatar",
  props: {
    user: {},
    sessionId: {},
  },

  data: () => ({
    hoverClass: {},
    avatar: "",
    user: {},
  }),
  methods: {
    async handleOnChange(e) {
      this.avatar = await e.target.files[0];

      const formData = new FormData();

      formData.set("avatar", this.avatar);

      await axios
        .post("/upload", formData)
        .then((response) => (this.user = response.data));

      this.$emit("avatar", this.user);
    },
  },
};
</script>
  
<style lang="scss" scoped>
.show-upload {
  label {
    opacity: 0.9;
  }
}
</style>