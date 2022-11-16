import Sidebar from './Sidebar.vue';
import Header from './Header.vue';

const components = [
    {name: 'Sidebar', component: Sidebar},
    {name: 'Header', component: Header}
]

export default {
    install(app) {
        components.forEach(({ name, component}) => {
            app.component(name, component)
        })
    }
}