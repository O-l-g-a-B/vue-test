<script setup>

</script>

<template>
  <main>
    <div class="main__new-order">
        <button class="main__new-order-button">
            <img class="main__new-order-button-img" src="../assets/plus.svg" alt="plus">
            <span class="main__new-order-button-text">НОВЫЙ ЗАКАЗ</span>
        </button>
    </div>
    <section>
        <input class="main__input-search" type="search" placeholder="Поиск">
        <input class="main__input-date" type="date">
        <button class="main__button">
        Фильтры
        </button>
        <button class="main__button_gray">1,5 тонн <img class="main__button_gray-img" src="../assets/close-o.svg"></button>
    </section>
    <Tabl/>
  </main>
</template>

<style scoped>
.main__new-order{
    height: 72px;
    margin: 0 15px;
    border-bottom: 1px solid #C4C4C4;;
}
.main__new-order-button {
    border-radius: 8px;
    background-color: #FFE837;
    border: none;
    color: #58595B;
    margin: 15px 0;
    padding: 12px 65px 11px 23px;
    font-weight: bold;
}

.main__new-order-button-img {
    padding-right: 31.5px;
}

main {
    border: 1px solid #C4C4C4;
}
.main__input-search {
    width: 232px;
    height: 32px;
    border-radius: 5px;
    border:1px solid #58595B;
    margin: 31px 16px;
    background: url(../assets/search.svg) no-repeat;
    background-position: 95% 50%;
    padding-left: 10px;
}
.main__input-search::-webkit-input-placeholder {
    color: #E6E6E6;
}
.main__input-date {
    width: 216px;
    height: 32px;
    border-radius: 5px;
    border:1px solid #58595B;
    color: #E6E6E6;
    padding: 0 10px;
}
.main__button {
    color: #58595B;
    border: 1px solid #58595B;
    border-radius: 16px;
    background: url('../assets/plus1.svg') no-repeat;
    background-position: 80% 50%;
    width: 136px;
    height: 32px;
    margin-left: 17px;
    padding-right: 35px;
}
.main__button_gray {
    color: #58595B;
    border: none;
    border-radius: 16px;
    background-color: #E6E6E6;
    background-position: 80% 50%;
    width: 136px;
    height: 32px;
    margin-left: 17px;
    padding-right: 11px;
}
.main__button_gray-img {
    padding-left: 10px;
}

</style>