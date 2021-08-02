<template>
    <div>
        <div id="two-divide" :style="`grid-template-columns: ${columnLayout}`">
            <span :class="`side ${shrinkBehaviour}`" :style="`background: ${bgLeft}`">
                <slot name="left"></slot>
            </span>
            
            <span :class="`side ${shrinkBehaviour === 'disappear' ? 'dont-disappear' : shrinkBehaviour}`"  :style="`background: ${bgRight}`">
                <slot name="right"></slot>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shrinkBehaviour: {
            type: String,
            default: "disappear"
        },

        columnLayout: {
            type: String,
            default: "1fr 1fr"
        },

        bgLeft: {
            type: String,
            default: "white"
        },

        bgRight: {
            type: String,
            default: "white"
        }
    }
}
</script>

<style scoped lang="scss">
#two-divide {
    display: grid;

    .side {
        // border: 1px solid red;
        padding: 25px 50px;
        margin: 0 0px;
        text-align: left;
    }

    .disappear {
        @media only screen and (max-width: 600px) {
            display: none;
        }
    }
    
    .dont-disappear {
        @media only screen and (max-width: 600px) {
            margin-left: 25vw;
            width: 50vw;
        }
    }
}
</style>