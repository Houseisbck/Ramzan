<template>
  <div class="friendlist-container">
    <div class="friendlist-group">
      <div class="friendlist__top-panel">Друзья: 6</div>
      <div class="friendlist__content-group">
        <a href="#" class="friendlist-item">
          <img :src="friendavatar" alt="" />
          <div>Олег</div>
        </a>
        <a class="friendlist-item">
          <img :src="friendavatar" alt="" />
          <div>Олег</div>
        </a>
        <a class="friendlist-item">
          <img :src="friendavatar" alt="" />
          <div>Олег</div>
        </a>
        <a class="friendlist-item">
          <img :src="friendavatar" alt="" />
          <div>Олег</div>
        </a>
        <a class="friendlist-item">
          <img :src="friendavatar" alt="" />
          <div>Олег</div>
        </a>
        <a class="friendlist-item">
          <img :src="friendavatar" alt="" />
          <div>Олег</div>
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
