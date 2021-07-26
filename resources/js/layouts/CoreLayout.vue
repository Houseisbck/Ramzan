<template>
  <body>
    <header class="header">
      <div class="header__top-background center">
        <div class="container">
          <div
            class="header__top col-12 d-flex justify-content-between pt-2 pb-2"
          >
            <a href="#" class="header__top-title">RamZan</a>
            <div class="header__top-links d-flex justify-content-between col-7">
              <a href="#" class="top__links-item">Моя страница</a>
              <a href="#" class="top__links-item">Новости</a>
              <a href="#" class="top__links-item">Сообщения</a>
              <a href="#" class="top__links-item">Друзья</a>
              <a href="#" class="top__links-item">Сообщества</a>
            </div>
            <a class="header__top-logout" @click.prevent="logout">Выйти</a>
          </div>
          <div class="header__left-side__panel mt-4">
            <ul>
              <li><img :src="fileIcon" alt="" /></li>
              <li><img :src="imageIcon" alt="" /></li>
              <li><img :src="videoIcon" alt="" /></li>
              <li><img :src="musicIcon" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container col-8 main-content">
        <router-view />
      </div>
    </section>
  </body>
</template>

<script>
import fileIcon from "../assets/images/fileIcon.svg";
import imageIcon from "../assets/images/imageIcon.svg";
import videoIcon from "../assets/images/videoIcon.svg";
import musicIcon from "../assets/images/musicIcon.svg";

export default {
  name: "core-layout",
  data: () => ({
    fileIcon: fileIcon,
    imageIcon: imageIcon,
    videoIcon: videoIcon,
    musicIcon: musicIcon,
  }),
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style-header-navbar";
</style>

