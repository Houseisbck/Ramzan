<template>
  <div class="col-5 d-flex align-items-center justify-content-center">
    <div
      class="col-9 main__friendlist d-flex justify-content-center flex-column"
    >
      <div class="friendlist-title mb-2">Друзья: 6</div>
      <div class="friendlist-roster">
        <ul class="d-flex flex-column col-12 p-3 m-0">
          <div class="freindlist-roster__group mb-2 d-flex">
            <li>
              <a href="#" class="d-flex flex-column align-items-center">
                <img
                  class="friendlist__roster-image col-12"
                  :src="friendavatar"
                />
                <div class="friendlist__roster-username">Олег</div>
              </a>
            </li>
            <li>
              <a href="#" class="d-flex flex-column align-items-center">
                <img
                  class="friendlist__roster-image col-12"
                  :src="friendavatar"
                />
                <div class="friendlist__roster-username">Олег</div>
              </a>
            </li>
            <li>
              <a href="#" class="d-flex flex-column align-items-center">
                <img
                  class="friendlist__roster-image col-12"
                  :src="friendavatar"
                />
                <div class="friendlist__roster-username">Олег</div>
              </a>
            </li>
          </div>
          <div class="freindlist-roster__group d-flex mt-2">
            <li>
              <a href="#" class="d-flex flex-column align-items-center">
                <img
                  class="friendlist__roster-image col-12"
                  :src="friendavatar"
                />
                <div class="friendlist__roster-username">Олег</div>
              </a>
            </li>
            <li>
              <a href="#" class="d-flex flex-column align-items-center">
                <img
                  class="friendlist__roster-image col-12"
                  :src="friendavatar"
                />
                <div class="friendlist__roster-username">Олег</div>
              </a>
            </li>
            <li>
              <a href="#" class="d-flex flex-column align-items-center">
                <img
                  class="friendlist__roster-image col-12"
                  :src="friendavatar"
                />
                <div class="friendlist__roster-username">Олег</div>
              </a>
            </li>
          </div>
        </ul>
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
