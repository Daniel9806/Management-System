import { createRouter, createWebHistory } from "vue-router";

const routes = [
    // LAYOUT DASHBOARD
    {
        path: "/dash",
        name: "layoutDash",
        component: () => import("../layouts/Dash.vue"),
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("../views/HomeView.vue"),
            },
            {
                path: "counter",
                name: "Counter",
                component: () => import("../views/CounterView.vue"),
            },
            {
                path: "users",
                name: "Users",
                component: () => import("../views/UserView.vue"),
            },
        ]
    },

    // LAYOUT AUTH
    {
        path: "/",
        name: "auth",
        component: () =>
            import(/* webpackChunkName: "AUTH" */ "../layouts/Auth.vue"),
        children: [
            {
                path: "",
                name: "login",
                component: () =>
                    import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;