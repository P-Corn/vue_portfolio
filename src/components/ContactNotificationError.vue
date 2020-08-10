<template>
    <div class="notification-container">
        <v-alert
        dense
        text
        type="error"
        >
            There was an <strong> error </strong> with your request. Please refresh and try again.
        </v-alert>
    </div>
</template>

<script>

export default {
    name: 'ContactNotificationError',
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