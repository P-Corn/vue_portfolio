<template>
    <div class="loading-container">
        <div class="loading-text">
            <h2>Loading...</h2>
        </div>
        <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
        ></v-progress-circular>
        <div class="loading-text">
            <h2>Please Wait</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactFormAnimation',
}
</script>

<style scoped>
    .loading-container{
        width: 100%;
        height: 426px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .loading-text{
        margin: auto;
    }

    @media only screen and (max-width: 576px) {
        .loading-container{
            height: 606px;
        }
    }
</style>