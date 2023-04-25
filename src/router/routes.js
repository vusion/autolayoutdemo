const routes = [
    {
        path: "/index",
        component: require("../views/index/index.vue").default,
    },
    {
        path: "/",
        redirect: "/index",
    },
    {
        path: "/notFound",
        component: require("../views/notFound/index.vue").default,
    },
    {
        path: "*",
        redirect: "/notFound",
    },
];
export { routes };
