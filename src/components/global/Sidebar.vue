<script setup>
</script>

<template>
  <section>
    <img src="../../assets/Logo (1).png" alt="logo"/>
    <ul>
      <li>
        <a href="#" class="aside__button"><img class="aside__button-img" src="../../assets/Home.svg" alt="home"/> Заказы</a>
      </li>
      <li>
        <a href="#" class="aside__button"><img class="aside__button-img" src="../../assets/bag.svg" alt="bag"/> Профиль</a>
      </li>
    </ul>
    <p class="aside__text aside__text_top">
      Ваш менеджер: <br>Зезюлько Сергей <br>+7 (929) 939-28-00</p>
      <p class="aside__text">d2@tkglp.ru</p>
    
  </section>
 </template>

<style scoped>
 section {
  height: 100vh;
  background-color: #F5F6FA;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
ul {
    margin-left: 0;
    padding-left: 0;
   }
.aside__button {
  display: block;
  width: 148px;
  height: 48px;
  border: none;
  cursor: pointer;
  background-color: #F5F6FA;
  color: #58595B;
  padding-left: 20px;
  padding-top: 12px;
  margin-left: 10px;
}
.aside__button:active {
    background-color: #DCECD8;
    border-left: 6px solid #72BF44;
    font-weight: bold;
    color: #151A22;
    }
.aside__button-img {
  padding-right: 10px;
}
.aside__text {
  color: #58595B;
  margin: 20px 15px;
  padding-top: 10px;
}
.aside__text_top {
  border-top: 1px solid #C3CED5;
}
</style>