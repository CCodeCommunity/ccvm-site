<template>
    <div id="header" :style="`background: ${backgroundColor}; color: ${color}`">
        
        <!-- Title & Logo -->
        <span id="title">
            <img v-if="logo != null" :src="require(`@/assets/${logo}`)" alt="logo">
            {{ title }}
        </span>

        <!-- Navigator -->
        <span>
            
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
    box-shadow: 0px 5px 10px gray;
    

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