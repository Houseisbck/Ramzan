<template>
  <header class="header">
    <div class="container">
      <div class="menu col-4">
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
                  Пароль должен быть
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
      </div>
    </div>
  </header>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "register",
  data: () => ({
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
    ...mapActions(["register"]),
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
      await this.register(formData);
      await this.$router.push("/page");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style-authentication";
</style>
