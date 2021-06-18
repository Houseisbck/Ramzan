<template>
  <body>
  <header class="header">
    <div class="header__top-background center">
      <div class="container">
        <div class="header__top col-12 d-flex justify-content-between pt-2 pb-2">
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
      <div class="header__left-side__panel mt-5">
        <ul>
          <li><i class="far fa-solid fa-file fa-2x"></i></li>
          <li><i class="far fa-solid fa-file-image fa-2x"></i></li>
          <li><i class="far fa-solid fa-file-video fa-2x"></i></li>
          <li><i class="far fa-solid fa-file-audio fa-2x"></i></li>
        </ul>
      </div>
    </div>
    </div>
  </header>
  <section>
    <div class="container col-8 main-content">
      <router-view/>
    </div>
  </section>
  </body>
</template>

<script>
export default {
  name: "core-layout",
    methods: {
        async  logout () {
            await this.$store.dispatch('logout')
            this.$router.push('/login?message=logout')
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style-header-navbar";
</style>

