<template>
  <div class="menu__icon-item">
    <img v-show="iconShow" class="menu-icon" :src="src" alt="" />
    <b-spinner
      v-if="spinnerShow"
      class="icon-spinner"
      type="grow"
      label="Loading..."
    ></b-spinner>
  </div>
</template>

<style scoped>
@import "../../../assets/scss/UIcomponents/__animateIcon.scss";
</style>

<script>
export default {
  props: ["src"],
  name: "animate-icon",
  data: () => ({
    iconShow: false,
    spinnerShow: true,
  }),
  mounted() {
    setTimeout(() => {
      this.iconShow = true;
      setTimeout(() => {
        this.spinnerShow = false;
      }, 80);
    }, 500);
  },
};
</script>