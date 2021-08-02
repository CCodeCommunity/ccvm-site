<template>
    <div id="folder" @click="open = !open">
        <div id="open-indicator" :class="open ? 'opened' : ''"/>
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: "Folder"
        }
    },

    data() {
        return {
            open: false
        }
    }
}
</script>

<style scoped lang="scss">
#folder {
    padding: 10px;

    &:hover {
        background: #eee;
    }
    
    #open-indicator {
        width: 10px;
        height: 10px;
        display: inline-block;
        border-bottom: 3px solid black;
        border-right: 3px solid black;
        transform: rotate(-45deg);
        margin-right: 20px;

        &.opened {
            transform: rotate(45deg); 
        }
    }
}
</style>