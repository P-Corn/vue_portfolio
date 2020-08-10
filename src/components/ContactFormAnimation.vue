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
        width: 488px;
        height: 426px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .loading-text{
        margin: auto;
    }
</style>