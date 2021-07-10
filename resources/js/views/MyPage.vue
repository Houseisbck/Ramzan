<template>
  <div>
    <div class="mypage-group d-flex justify-content-center col-12 p-0">
      <myPageAvatar @avatar="updateAvatar" :user="user" :sessionId="sessionId"></myPageAvatar>
      <myPageAbout :user="user"></myPageAbout>
    </div>
    <section class="main mt-5">
      <div
        class="mypage-group container d-flex justify-content-center p-0 col-12"
      >
        <myPageFriendList></myPageFriendList>
        <myPagePost></myPagePost>
      </div>
    </section>
  </div>
</template>
  
<style lang="scss">
@import "../assets/scss/style-my-page";
</style>

<script>
import MyPageAvatar from "./components/MyPageAvatar.vue";
import MyPageAbout from "./components/MyPageAboutUser.vue";
import MyPageFriendList from "./components/MyPageFriendList.vue";
import MyPagePost from "./components/MyPagePost.vue";

export default {
  components: {
    MyPageAvatar,
    MyPageAbout,
    MyPageFriendList,
    MyPagePost,
  },
  name: "mypage",
  data: () => ({
    user: {},
    sessionId: {},
  }),
  methods: {
    updateAvatar(user) {
      this.user = user;
    },
  },
  async mounted() {
    await axios.get("/id").then((response) => (this.sessionId = response.data));
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      axios.get("/user/" + to.params.id).then((response) => {
        vm.user = response.data;
        if (response.data.avatar === null || undefined) {
          vm.user.avatar = "/public/images/default.jpg";
        }
      });
    });
  },
};
</script>