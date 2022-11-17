<script setup>
import {ref} from 'vue'

const tableHeads = ['Статус заказа', 'Дата подачи', 'Тоннаж', 'Вид ТС', 'Номер заказа', 'Маршрут', 'Исполнитель', 'GPS','Документы', 'Стоимость', 'Оплата']
const tableSizeColumns = '135px 119px 80px 110px 119px 200px 110px 50px 95px 111px 150px'

const orders = ref([
  {
    "id": 1,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": " ",
    "Documents": "",
    "Price": " ",
    "Payment": " ",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 2,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": " ",
    "Documents": "",
    "Price": " ",
    "Payment": " ",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 3,
    "status": "В работе",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 4,
    "status": "В работе",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 5,
    "status": "В работе",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Грузчик",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 6,
    "status": "В работе",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 7,
    "status": "Отказ",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Счет выставлен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 8,
    "status": "Доставлен",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Счет выставлен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 9,
    "status": "Отменен",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 10,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 11,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 12,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 13,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 14,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 15,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов.",
    "bg": "#FFFFFF"
  },
  {
    "id": 16,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 17,
    "status": "Выполнен",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов.",
    "bg": "#FFFFFF"
  },
  {
    "id": 18,
    "status": "Новый",
    "Дdate": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 19,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  },
  {
    "id": 20,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#F5F5F5"
  },
  {
    "id": 21,
    "status": "Новый",
    "date": "20.07.2021",
    "Tn": "1.5 т",
    "Ts": "Изотерма",
    "Nomber": "125548031",
    "Route": "Склад загрузки",
    "GPS": "",
    "Documents": "",
    "Price": "20 800 р.",
    "Payment": "Не оплачен",
    "executor": "Магомедов",
    "bg": "#FFFFFF"
  }
])


</script>

<template>
    <section class="table">
        <div class="table__buttons">
            <button class="table__button-orders">Все заказы<sup class="table__buttons-all-orders">15</sup></button>
            <button class="table__button">Заказы на сегодня<sup class="table__buttons-all">5</sup></button>
            <button class="table__button">Заказы на завтра<sup class="table__buttons-all">8</sup></button>
        </div>
    </section>
    
    <base-table
        :head="tableHeads"
        :columnTemplates="tableSizeColumns">
        <table-row
          v-for="order in orders"
          :key="order.id"
          :columnTemplates="tableSizeColumns"
          :bgRow="order.bg"
        >
          <table-column>
            <button :class="{
              'new': order.status === 'Новый',
              'work': order.status === 'В работе',
              'refusal': order.status === 'Отказ',
              'cancel': order.status === 'Отменен',
              'delivered': order.status === 'Доставлен',
              'completed': order.status === 'Выполнен'}" class="button__orders">
              {{order.status}}
            </button>
          </table-column>
          <table-column>
            {{order.date}}
          </table-column>
          <table-column>
            {{order.Tn}}
          </table-column>
          <table-column>
            {{order.Ts}}
          </table-column>
          <table-column>
            {{order.Nomber}}
          </table-column>
          <table-column>
            {{order.Route}}
          </table-column>
          <table-column>
            {{order.executor}}
          </table-column>
          <table-column>
            {{order.GPS}}
          </table-column>
          <table-column>
            {{order.Documents}}
          </table-column>
          <table-column>
            {{order.Price}}
          </table-column>
          <table-column>
            {{order.Payment}}
          </table-column>
        </table-row>
    </base-table>
</template>

<style scoped>
.table__button {
    border: none;
    background-color: #FFFFFF;
    font-size: 12px;
    font-weight: 500;
    padding-left: 25px;
    padding-top: 16px;
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
.table {
    width: 100%;
    margin-bottom: 40px;
    margin-top: 21px;
}
.table-wrapper {
    display: flex;
    justify-content: center;
}   
.table-head {
    padding: 13px;
    display: grid;
    align-items: center;
    border: 1px solid #E4E9EB;
}
.button__orders {
  border: none;
  border-radius: 16px;
  color:#F5F6FA;
  width: 96px;
  height: 18px;
}

.new {
  background-color: #FF9800;
  font-size: 12px;
  padding: 1px;
}

.work {
  background-color: #326BFF;
  font-size: 12px;
  padding: 1px;
}
.refusal, .cancel {
  background-color: #F94C40;
  font-size: 12px;
  padding: 1px;
}
.delivered, .completed {
  background-color: #2DCA89;
  font-size: 12px;
  padding: 1px;
}
</style>