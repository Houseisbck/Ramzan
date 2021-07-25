<template>
  <header class="header">
    <div class="container">
      <div class="menu col-4">
        <div class="menu-animation__messages-items">
          <div
            class="animation__message-item"
            ref="animeFirstItem"
            v-anime="{
              backgroundColor: '#9EC4C9',
              duration: 0,
            }"
          >
            {{ animeFirstItem }}
          </div>
          <div
            v-show="animeItemSecondShow"
            class="animation__message-item"
            ref="animeSecondItem"
            v-anime="{
              backgroundColor: '#9EC4C9',
              duration: 0,
            }"
          >
            {{ animeSecondItem }}
          </div>
          <div
            v-show="animeItemThirdShow"
            class="animation__message-item"
            ref="animeThirdItem"
            v-anime="{
              backgroundColor: '#9EC4C9',
              duration: 0,
            }"
          >
            {{ animeThirdItem }}
          </div>
        </div>
        <div class="menu-group">
          <h1 class="text-center menu-title">Регистрация</h1>
          <form
            @submit.prevent="submitHandler"
            method="POST"
            action=""
            class="d-flex flex-column align-items-center form__register"
          >
            <div class="input-group">
              <input
                placeholder="Имя"
                type="text"
                class="w-100 form__register-input"
                id="name"
                v-model.trim="name"
                :class="{ invalid: $v.name.$dirty && !$v.name.required }"
              />
              <div class="invalid-group">
                <div class="invalid" v-if="$v.name.$dirty && !$v.name.required">
                  Поле Имя не должно быть пустым
                </div>
              </div>
            </div>
            <div class="input-group">
              <input
                placeholder="Эл. адрес"
                class="w-100 form__register-input"
                id="email"
                type="text"
                v-model.trim="email"
                :class="{
                  invalid:
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email),
                }"
              />
              <div class="invalid-group">
                <div
                  class="invalid"
                  v-if="$v.email.$dirty && !$v.email.required"
                >
                  Поле Email не должно быть пустым
                </div>
                <div
                  class="invalid"
                  v-else-if="$v.email.$dirty && !$v.email.email"
                >
                  Введите корретный Email
                </div>
              </div>
            </div>
            <div class="input-group">
              <input
                placeholder="Пароль"
                class="w-100 form__register-input"
                id="password"
                type="password"
                v-model.trim="password"
                :class="{
                  invalid:
                    ($v.password.$dirty && !$v.password.required) ||
                    ($v.password.$dirty && !$v.password.minLength),
                }"
              />
              <div class="invalid-group">
                <div
                  class="invalid"
                  v-if="$v.password.$dirty && !$v.password.required"
                >
                  Введите пароль
                </div>
                <div
                  class="invalid"
                  v-else-if="$v.password.$dirty && !$v.password.minLength"
                >
                  Пароль должен быть 6
                  {{ $v.password.$params.minLength }} символов. Сейчас он
                  {{ password.length }}
                </div>
              </div>
            </div>
            <label class="submit__button-label" for="formSumbitButton">
              Зарегистрироваться
            </label>
            <button
              id="formSumbitButton"
              class="form__submit-button"
              type="submit"
            />
          </form>
          <div class="menu-decr"></div>
          <router-link
            to="/login"
            class="mt-2 w-100 btn-flip"
            data-back="перейти"
            data-front="авторизация"
          ></router-link>
        </div>
        <div class="menu__bottom-icons">
          <div class="menu__icon-item">
            <img v-show="iconShow" class="menu-icon" :src="crayfish" alt="" />
            <b-spinner
              v-if="spinnerShow"
              class="icon-spinner"
              type="grow"
              label="Loading..."
            ></b-spinner>
          </div>
          <div class="menu__icon-item">
            <img v-show="iconShow" class="menu-icon" :src="halibut" alt="" />
            <b-spinner
              v-if="spinnerShow"
              class="icon-spinner"
              type="grow"
              label="Loading..."
            ></b-spinner>
          </div>
          <div class="menu__icon-item">
            <img v-show="iconShow" class="menu-icon" :src="shrimp" alt="" />
            <b-spinner
              v-if="spinnerShow"
              class="icon-spinner"
              type="grow"
              label="Loading..."
            ></b-spinner>
          </div>
          <div class="menu__icon-item">
            <img v-show="iconShow" class="menu-icon" :src="acne" alt="" />
            <b-spinner
              v-if="spinnerShow"
              class="icon-spinner"
              type="grow"
              label="Loading..."
            ></b-spinner>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import crayfish from "../assets/images/crayfish.png";
import halibut from "../assets/images/halibut.png";
import shrimp from "../assets/images/shrimp.png";
import acne from "../assets/images/acne.png";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "register",
  data: () => ({
    animeFirstItem: "FirstItem",
    animeSecondItem: "SecondItem",
    animeThirdItem: "ThirdItem",
    animeItemFirstShow: false,
    animeItemSecondShow: false,
    animeItemThirdShow: false,
    iconShow: false,
    spinnerShow: true,
    crayfish: crayfish,
    halibut: halibut,
    shrimp: shrimp,
    acne: acne,
    email: "",
    password: "",
    name: "",
  }),
  validations: {
    name: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  mounted() {
    this.selectRandomAnimeMessages();
    this.animateMessages();
    this.animateIcons();
  },
  methods: {
    selectRandomAnimeMessages() {
      function items() {
        let itemsAnime = [];
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
        ];
        console.log(animeMessages);
        let item =
          animeMessages[Math.floor(Math.random() * animeMessages.length)];

        for (let index = 6; index > itemsAnime.length; index--) {
          if (index > 0) {
            console.log(item);
            animeMessages = animeMessages.filter((val) => val !== item);
            console.log(animeMessages);
          } else {
            return itemsAnime;
          }
        }
      }
      console.log(items());
    },

    animateIcons() {
      setTimeout(() => {
        this.iconShow = true;
        setTimeout(() => {
          this.spinnerShow = false;
        }, 80);
      }, 500);
    },

    animateMessages() {
      let targets = this.$refs.animeFirstItem;
      this.$anime.timeline().add({
        targets,
        translateX: 200,
        duration: 2000,
      });
      this.animeItemFirstShow = true;
      setTimeout(() => {
        let targets = this.$refs.animeSecondItem;
        this.$anime.timeline().add({
          targets,
          translateX: 225,
          duration: 2000,
        });
        this.animeItemSecondShow = true;
      }, 400);
      setTimeout(() => {
        let targets = this.$refs.animeThirdItem;
        this.$anime.timeline().add({
          targets,
          translateX: 250,
          duration: 2000,
        });
        this.animeItemThirdShow = true;
      }, 800);
    },

    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      await axios.post("/register", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      let response = await axios.get("/id");
      this.$router.push(`/page/${response.data}`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style-authentication";
</style>
