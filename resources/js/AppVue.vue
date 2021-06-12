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
</style>

