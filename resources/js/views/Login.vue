<template>
  <header class="header">
    <div class="container">
      <div class="menu col-4">
        <div class="menu-group">
          <div class="menu__messages-items">
            <animate-message :amount="3" />
          </div>
          <h1 class="menu__title">авторизация</h1>
          <form @submit.prevent="submitHandler" class="menu__form__register">
            <div class="menu__input-group">
              <input
                placeholder="Эл. адрес"
                type="text"
                class="menu__register-input"
                v-model.trim="email"
                :class="{
                  invalid:
                    ($v.email.$dirty && !$v.email.required) ||
                    ($v.email.$dirty && !$v.email.email),
                }"
              />
              <div class="menu__invalid-items">
                <div
                  class="menu__invalid-item"
                  v-if="$v.email.$dirty && !$v.email.required"
                >
                  Поле Email не должно быть пустым
                </div>
                <div
                  class="menu__invalid-item"
                  v-else-if="$v.email.$dirty && !$v.email.email"
                >
                  Введите корретный Email
                </div>
              </div>
            </div>
            <div class="menu__input-group">
              <input
                placeholder="Пароль"
                type="password"
                class="menu__register-input"
                v-model.trim="password"
              />
              <div class="menu__invalid-items">
                <div
                  class="menu__invalid-item"
                  v-if="$v.password.$dirty && !$v.password.required"
                >
                  Введите пароль
                </div>
                <div
                  class="menu__invalid-item"
                  v-else-if="$v.password.$dirty && !$v.password.minLength"
                >
                  Пароль должен быть
                  {{ $v.password.$params.minLength }} символов. Сейчас он
                  {{ password.length }}
                </div>
              </div>
            </div>
            <label class="menu__submit-button-label" for="formSumbitButton">
              Авторизироваться
            </label>
            <input
              id="formSumbitButton"
              class="menu__submit-button"
              type="submit"
            />
          </form>
          <router-link
            to="/"
            class="btn-flip menu__botton-route"
            data-back="перейти"
            data-front="Регистрация"
          ></router-link>
        </div>
        <div class="menu__bottom-icons">
          <animate-icon :src="crayfish" />
          <animate-icon :src="halibut" />
          <animate-icon :src="shrimp" />
          <animate-icon :src="acne" />
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
  name: "login",
  data: () => ({
    crayfish: crayfish,
    halibut: halibut,
    shrimp: shrimp,
    acne: acne,
    sessionId: {},
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  mounted() {
    setTimeout(() => {
      this.iconShow = true;
      setTimeout(() => {
        this.spinnerShow = false;
      }, 80);
    }, 500);
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await axios.post("/login", {
          email: formData.email,
          password: formData.password,
        });
        let response = await axios.get("/id");
        this.$router.push(`/page/${response.data}`);
      } catch (e) {}
    },
  },
};
</script>

<style scoped  lang="scss">
@import "../assets/scss/style-authentication";
</style>