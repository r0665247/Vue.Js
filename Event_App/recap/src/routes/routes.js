import router from 'vue-router'

let routes = [
    {
        path: "/",
        component: require("../components/HelloWorld")
    },
    {
        path: "/form",
        component: require("../components/form")
    },{
        path: "/index",
        component: require("../components/index")
    },
]
export default router({
    routes
})