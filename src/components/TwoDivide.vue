<template>
    <div>
        <div id="two-divide">
            <span :class="`side ${shrinkBehaviour}`">
                <slot name="left"></slot>
            </span>
            
            <span :class="`side ${shrinkBehaviour === 'disappear' ? 'dont-disappear' : shrinkBehaviour}`">
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
        }
    }
}
</script>

<style scoped lang="scss">
#two-divide {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .side {
        // border: 1px solid red;
        padding: 25px;
        margin: 0 25px;
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