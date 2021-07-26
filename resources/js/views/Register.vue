<template>
  <header class="header">
    <div class="container">
      <div class="menu col-4">
        <div class="menu-animation__messages-items">
          <animate-message :amount="3" />
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
import AnimateMessages from "./components/UI/AnimateMessages.vue";

export default {
  components: { AnimateMessages },
  name: "register",
  data: () => ({
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
  methods: {
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
