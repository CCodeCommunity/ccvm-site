<template>
    <div id="header" :style="`background: ${backgroundColor}; color: ${color}`">
        <ul>
            <li>Home</li>
            <li>Download</li>
            <li>Guide</li>
        </ul>
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
    padding: 0 20px;
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
    
    ul {
        list-style: none;
        margin: 0;
        
        li {
            display: inline-block;
            padding: 25px 25px;

            &:hover {
                background: #222;
            }
        }
    }
}
</style>