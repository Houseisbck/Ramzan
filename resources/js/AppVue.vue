<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import CoreLayout from "./layouts/CoreLayout.vue";

export default {
  props: ["user"],
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  comments: {
    EmptyLayout,
    CoreLayout,
  },
};
</script>

<style lang="scss">
@import "https://use.fontawesome.com/releases/v5.15.3/css/all.css";
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>

