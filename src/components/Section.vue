<template>
    <div v-if="type === 'cube'" id="section" :style="`background: ${backgroundColor}; padding: ${padding}px 25px;`">
        <slot></slot>
    </div>

    <div v-else-if="type === 'diagonal'" class="diagonal-style" id="section" :style="`background: ${backgroundColor}; padding: ${padding}px 25px;`">
        <div id="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: '#e5e2ff'
        },

        type: {
            type: String,
            default: 'cube'
        },

        padding: {
            type: Number,
            default: 50
        }
    }
}
</script>

<style scoped lang="scss">
#section {
    padding: 40px;
    text-align: center;
}

.diagonal-style {
    transform: skewY(-5deg);
    margin: 40px 0;

    #content {
        transform: skewY(5deg);
    }
}
</style>