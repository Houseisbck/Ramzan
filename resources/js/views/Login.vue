<template>
  <header class="header">
    <div class="container">
      <div class="menu col-4">
        <div class="menu-group">
          <h1 class="text-center menu-title">авторизация</h1>
          <form
            @submit.prevent="submitHandler"
            class="d-flex flex-column align-items-center form__register"
          >
            <div class="input-group">
              <input
                placeholder="Эл. адрес"
                type="text"
                class="w-100 mt-4 form__register-input"
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
                type="password"
                class="w-100 mt-4 form__register-input"
                v-model.trim="password"
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
                  Пароль должен быть
                  {{ $v.password.$params.minLength }} символов. Сейчас он
                  {{ password.length }}
                </div>
              </div>
            </div>
            <label class="submit__button-label" for="formSumbitButton">
              Авторизироваться
            </label>
            <input
              id="formSumbitButton"
              class="form__submit-button"
              type="submit"
            />
          </form>
          <div class="menu-decr"></div>
          <router-link
            to="/"
            class="mt-2 w-100 btn-flip"
            data-back="перейти"
            data-front="Регистрация"
          ></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from "../utils/messages";
import { mapActions } from "vuex";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  // mounted () {
  //     if (messages[this.$route.query.message]) {
  //         this.$message(messages[this.$route.query.message])
  //     }
  // },
  methods: {
    ...mapActions(["login"]),
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
        await this.login(formData);
        await this.$router.push("/page");
      } catch (e) {}
    },
  },
};
</script>

<style scoped  lang="scss">
@import "../assets/scss/style-authentication";
</style>
