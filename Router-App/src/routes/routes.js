import Vue from 'vue'
import router from 'vue-router'
import home from "../components/HelloWorld"
import index from "../components/index"
import form  from "../components/form"

Vue.use(router);

export default new router({
    routes : [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/form",
            name: "form",
            component: form
        },{
            path: "/index",
            name: "index",
            component: index
        },
    ]
})