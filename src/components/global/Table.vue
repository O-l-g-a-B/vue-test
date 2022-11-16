<script setup>
</script>

<template>
 <section class="table">
    <div class="table__buttons">
        <button class="table__button-orders">Все заказы<sup class="table__buttons-all-orders">15</sup></button>
        <button class="table__button">Заказы на сегодня<sup class="table__buttons-all">5</sup></button>
        <button class="table__button">Заказы на завтра<sup class="table__buttons-all">8</sup></button>
    </div>
 </section>
 </template>

<style scoped>
.table__button {
    border: none;
    background-color: #FFFFFF;
    font-size: 12px;
    font-weight: 500;
    padding-left: 25px;
    padding-top: 39px;
}
.table__buttons-all {
    border: 1px solid #58595B;
    font-size: 12px;
    background-color:  #FFFFFF;
    color: #58595B;
    border-radius: 50%;
    padding: 0 3px;
}
.table__button-orders {
    border: none;
    background-color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding-left: 0;
    padding-right: 0;
    padding-top: 39px;
    border-bottom: 4px solid #E6E6E6;
    margin-left: 25px;
}
.table__buttons-all-orders {
    border: none;
    font-size: 12px;
    background-color:  #C4C4C4;
    color: #58595B;
    border-radius: 50%;
    padding: 0 3px;
}
</style>