<template>
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
          <a href="#" class="header__top-logout">Выйти</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header__left-side col-1">
        <div class="header__left-side__panel mt-5">
          <ul>
            <li><i class="far fa-solid fa-file fa-2x"></i></li>
            <li><i class="far fa-solid fa-file-image fa-2x"></i></li>
            <li><i class="far fa-solid fa-file-video fa-2x"></i></li>
            <li><i class="far fa-solid fa-file-audio fa-2x"></i></li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </header>
</template>

<script>
export default {
  name: "core-layout",
};
</script>