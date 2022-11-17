import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import Main from './Main.vue';
import Tabl from './Tabl.vue';
import BaseTable from './BaseTable.vue';
import TableRow from './TableRow.vue';
import TableRColumn from './TableColumn.vue';

const components = [
    {name: 'Sidebar', component: Sidebar},
    {name: 'Header', component: Header},
    {name: 'Main', component: Main},
    {name: 'Tabl', component: Tabl},
    {name: 'BaseTable', component: BaseTable},
    {name: 'TableRow', component: TableRow},
    {name: 'TableRColumn', component: TableRColumn},
]

export default {
    install(app) {
        components.forEach(({ name, component}) => {
            app.component(name, component)
        })
    }
}