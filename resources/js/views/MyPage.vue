<template>
  <div class="page-group">
    <myPageAvatar
      @avatar="updateAvatar"
      :user="user"
      :sessionId="sessionId"
      :userAvatar="userAvatar"
    ></myPageAvatar>
    <myPageAbout :user="user"></myPageAbout>
    <myPageFriendList></myPageFriendList>
    <!-- <myPagePost></myPagePost> -->
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
    userAvatar: {},
    sessionId: {},
  }),
  methods: {
    updateAvatar(updateAvatar) {
      if (updateAvatar.length <= 0) {
        this.userAvatar = [
          {
            path: "/public/images/default.jpg",
            path_miniature: "/public/images/defaultmin.jpg",
          },
        ];
      } else {
        this.userAvatar = updateAvatar;
      }
    },
  },
  async mounted() {
    await axios.get("/id").then((response) => (this.sessionId = response.data));
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      axios.get("/user/" + to.params.id).then((response) => {
        vm.user = response.data;
        axios.get("/getUserAvatar/" + to.params.id).then((response) => {
          if (response.data.length == 0) {
            vm.userAvatar = [
              {
                path: "/public/images/default.jpg",
                path_miniature: "/public/images/defaultmin.jpg",
              },
            ];
          } else {
            vm.userAvatar = response.data;
          }
        });
      });
    });
  },
};
</script>