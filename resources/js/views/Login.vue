<template>
  <header class="header">
    <div class="container">
      <div class="menu col-4">
        <div class="menu-group">
          <h1 class="text-center menu-title">авторизация</h1>
          <form
            method="POST"
            action=""
            class="d-flex flex-column align-items-center form__register"
          >
            <span class="invalid"></span>
            <input
              placeholder="Эл. адрес"
              type="text"
              class="w-100 mt-4 form__register-input"
            />
            <span class="invalid"></span>
            <input
              placeholder="Пароль"
              type="text"
              class="w-100 mt-4 form__register-input"
            />
            <a
              href="#"
              class="mt-4 w-100 btn-flip"
              data-back="Авторизироваться "
              data-front="Авторизация"
            ></a>
          </form>
          <div class="menu-decr"></div>
          <a
            href="#"
            class="mt-2 w-100 btn-flip"
            data-back="перейти"
            data-front="Регистрация"
          ></a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "login",
};
</script>