<template>
    <div id="header" :style="`background: ${backgroundColor}; color: ${color}`">
        
        <!-- Title & Logo -->
        <span id="title">
            <img v-if="logo != null" :src="require(`@/assets/${logo}`)" alt="logo">
            {{ title }}
        </span>
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
    padding: 20px;
    font-weight: 100;
    font-size: x-large;

    #title {
        display: flex;
        align-items: center;
    }

    img {
        height: 1.5em;
        padding-right: 20px;
    }
}
</style>