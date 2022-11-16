<script setup>

</script>

<template>
  <header class="header">
    <div class="header__section">
    <h1 class="header__name">Заказы</h1>
    </div>
    <div class="header__section">
        <img class="header__img" src="../../assets/bell.svg" alt="bell">
        <p class="header__text">ООО “Рога и Копыта”<br>ИНН: 125326548751</p>
        <img class="header__sber" src="../../assets/sber.svg" alt="sber">
    </div>
  </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: 64px;
    background-color: #F5F6FA;
    padding: 15px;
}
.header__name {
    font-size: 24px;
    font-weight: 700;
    
    color: #151A22;
}
.header__img {
    border-right: 1px solid #C4C4C4;
    padding-right: 29px;
}
.header__text {
    font-size: 12px;
    padding-left: 32px;
    padding-right: 9px;
    color: #151A22;
}
.header__section {
    display: flex;
}
.header__sber {
    padding-right: 13,21px;
}
</style>