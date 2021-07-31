<template>
    <div id="footer" :style="`background: ${backgroundColor}; color: ${color}`">
        <div class="container">
            <div><img src="@/assets/phone.svg" />06 12345678</div>
            <div><img src="@/assets/email.svg" />voorbeeld@email.com</div>
            <div><img src="@/assets/insta.svg" />brugmansspringkussenverhuur</div>
            <div><img src="@/assets/facebook.svg" />brugmansspringkussenverhuur</div>
        </div>
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
        }
    }
}
</script>

<style scoped lang="scss">
#footer {
    padding: 20px 0;
    box-shadow: 0px -5px 10px gray;
    font-size: 16px;
    font-weight: 100;

    .container {
        width: 80vw;
        padding-left: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
        }
        
        div {
            padding-right: 50px;
        }
    }

    img {
        height: 16px;
        padding-right: 20px;
    }
}
</style>