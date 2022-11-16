import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import Main from './Main.vue';
import Table from './Table.vue';

const components = [
    {name: 'Sidebar', component: Sidebar},
    {name: 'Header', component: Header},
    {name: 'Main', component: Main},
    {name: 'Table', component: Table},
]

export default {
    install(app) {
        components.forEach(({ name, component}) => {
            app.component(name, component)
        })
    }
}