<template>
  <div class="friendlist-container">
    <div class="friendlist-group">
      <div class="friendlist__top-panel">Друзья: 6</div>
      <div class="friendlist__content-group">
        <a href="#" class="friendlist__item-group">
          <img class="friendlist__item-img" :src="friendavatar" alt="" />
          <div class="friendlist__item-text">Олег</div>
        </a>
        <a class="friendlist__item-group">
          <img class="friendlist__item-img" :src="friendavatar" alt="" />
          <div class="friendlist__item-text">Олег</div>
        </a>
        <a class="friendlist__item-group">
          <img class="friendlist__item-img" :src="friendavatar" alt="" />
          <div class="friendlist__item-text">Олег</div>
        </a>
        <a class="friendlist__item-group">
          <img class="friendlist__item-img" :src="friendavatar" alt="" />
          <div class="friendlist__item-text">Олег</div>
        </a>
        <a class="friendlist__item-group">
          <img class="friendlist__item-img" :src="friendavatar" alt="" />
          <div class="friendlist__item-text">Олег</div>
        </a>
        <a class="friendlist__item-group">
          <img class="friendlist__item-img" :src="friendavatar" alt="" />
          <div class="friendlist__item-text">Олег</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import friendavatar from "../../assets/images/avatar-friends-image/xnofTuG-kPg.jpg";

export default {
  name: "myPageFriendList",
  data: () => ({
    friendavatar: friendavatar,
  }),
};
</script>
