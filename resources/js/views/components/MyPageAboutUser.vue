<template>
  <div class="header__right-side__panel col-4">
    <div class="right-side__panel-sticks">
      <div class="panel__stick-first"></div>
      <div class="panel__stick-second"></div>
    </div>
    <div class="right-side__title">Информация о пользователе</div>
    <div class="right-side__descr">
      <ul>
        <li>Имя: {{ user.name }}</li>
        <li>День рождения: 2005</li>
        <li>Город: Украина</li>
        <li>Языки: Славянский</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPageAbout",
  props: {
    user: {},
  },
};
</script>
