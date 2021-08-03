<template>
    <div id="app">
        <Header backgroundColor="black"
                logo="ccvm.png"/>

        <Navigator backgroundColor="black"/>
        
        <Main>
            <router-view></router-view>
        </Main>

        <Footer backgroundColor="black" />
    </div>
</template>

<script>
import Header from "./components/Header.vue";

import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";

import Navigator from "./components/Navigator.vue"

export default {
    name: 'App',

    components: {
        Header,
        Footer,
        Main,
        Navigator
    }
};
</script>

<style lang="scss">
@import "./styles/main.scss";

code {
    background: #ddd;
    padding: 5px;
}

#md-viewer {
    p {
        text-align: left;
    }
}
</style>
