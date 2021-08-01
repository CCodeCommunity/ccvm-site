import NotFound from "./views/NotFound.vue"
import Home from "./views/Home.vue"
import Download from "./views/Download.vue"
import Reference from "./views/Reference.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/download", component: Download },
    { path: "/reference", component: Reference },
    { path: "*", component: NotFound }
];

export default routes;