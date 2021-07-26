<template>
  <div>
    <div
      v-for="amoun in amount"
      :key="amoun"
      class="animation__message-item"
      ref="animeItem"
      v-anime="{
        backgroundColor: '#9EC4C9',
        duration: 0,
      }"
    >
      {{ animeItem }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    amount: [],
  },
  name: "animate-message",
  data: () => ({
    animeItem: "",
  }),

  mounted() {
    this.selectRandomAnimeMessages();
    this.animateMessages();
  },

  methods: {
    selectRandomAnimeMessages() {
      let animeMessages = [
        "Ваше имя? Олег? или не Олег?",
        "Собака помогла с дизайном",
        "Это палтус? Ого какая рыбка",
        "Ведро гречки?..",
        "Знакомьтесь, это - RamZan",
        "Дружите, общайтесь, существуйте",
        "(с)Конфуций, 502 г. до н.э.",
        "Привет, как дела?",
        "Какой из адресов на этот раз?",
        "Минимум 6 символов, а максимум?",
        "Бот это не прочитает",
        "Никто не узнает, что вы кушаете ночью",
      ];
      function getRandom(arr, n) {
        var result = new Array(n),
          len = arr.length,
          taken = new Array(len);
        if (n > len)
          throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
          let x = Math.floor(Math.random() * len);
          result[n] = arr[x in taken ? taken[x] : x];
          taken[x] = --len;
        }
        return result;
      }
      let resultRandomMessages = getRandom(
        animeMessages,
        this.$refs.animeItem.length
      );

      for (let index = 0; index < resultRandomMessages.length; index++) {
        this.$refs.animeItem[index].innerText = resultRandomMessages[index];
      }
    },

    animateMessages() {
      let targets = this.$refs.animeItem;
      this.$anime.timeline().add({
        targets,
        translateX: 150,
        duration: 2000,
      });
    },
  },
};
</script>