<template>
    <div class="notification-container">
        <v-alert
        dense
        text
        type="success"
        >
            Request sent <strong> successfully </strong>! We will get back to you shortly.
        </v-alert>
    </div>
</template>

<script>

export default {
    name: 'ContactNotificationSuccess',
}
</script>

<style scoped>
    .notification-container{
        width: 100%;
        height: 426px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .notification-text{
        margin: auto;
    }
    @media only screen and (max-width: 576px) {
        .notification-container{
            height: 606px;
        }
    }
</style>