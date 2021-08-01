<template>
    <div id="header" :style="`background: ${backgroundColor}; color: ${color}`">
        <router-link to="/">Home</router-link>
        <router-link to="/download">Download</router-link>
        <router-link to="/reference">Reference</router-link>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: '#438347'
        },

        color: {
            type: String,
            default: 'white'
        },

        title: {
            type: String,
            default: ''
        },

        logo: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped lang="scss">
#header {
    font-weight: 100;
    box-shadow: 0px 5px 10px gray;

    a {
        color: white;
        text-decoration: none;
        display: inline-block;
        padding: 25px 25px;

        &:hover, &.router-link-exact-active {
            background: #222;
        }
    }

    #title {
        display: flex;
        align-items: center;
    }
    

        
        li {
            
        }
    
}
</style>