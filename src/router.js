import NotFound from "./views/NotFound.vue"
import Home from "./views/Home.vue"

const routes = [
    { path: "/", component: Home },
    { path: "*", component: NotFound }
];

export default routes;