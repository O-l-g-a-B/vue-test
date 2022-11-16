import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import Main from './Main.vue';

const components = [
    {name: 'Sidebar', component: Sidebar},
    {name: 'Header', component: Header},
    {name: 'Main', component: Main},
]

export default {
    install(app) {
        components.forEach(({ name, component}) => {
            app.component(name, component)
        })
    }
}